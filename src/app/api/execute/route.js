import { NextResponse } from "next/server";
import vm from "vm";
import fs from "fs";

function deepEqual(a, b) {
	if (a === b) return true;
	if (a == null || b == null) return false;
	if (typeof a !== typeof b) return false;

	if (Array.isArray(a) && Array.isArray(b)) {
		if (a.length !== b.length) return false;
		return a.every((val, i) => deepEqual(val, b[i]));
	}

	if (typeof a === "object" && typeof b === "object") {
		const keysA = Object.keys(a).sort();
		const keysB = Object.keys(b).sort();
		if (keysA.length !== keysB.length) return false;
		if (!keysA.every((k, i) => k === keysB[i])) return false;
		return keysA.every((k) => deepEqual(a[k], b[k]));
	}

	return false;
}

// ── Minimal Jest-compatible test runner (runs inside vm sandbox) ──
const MINI_TEST_RUNNER = `
var __testResults = [];
var __testQueue = [];
var __currentDescribe = "";

function describe(name, fn) {
	__currentDescribe = name;
	fn();
	__currentDescribe = "";
}

function test(name, fn) {
	__testQueue.push({
		name: __currentDescribe ? __currentDescribe + " > " + name : name,
		fn: fn
	});
}

function expect(actual) {
	var base = {
		toBe: function(expected) {
			if (actual !== expected) {
				throw new Error("Expected " + JSON.stringify(expected) + " but received " + JSON.stringify(actual));
			}
		},
		toEqual: function(expected) {
			if (!__deepEqual(actual, expected)) {
				throw new Error("Expected " + JSON.stringify(expected) + " but received " + JSON.stringify(actual));
			}
		},
		toBeGreaterThanOrEqual: function(expected) {
			if (actual < expected) {
				throw new Error("Expected >= " + expected + " but received " + actual);
			}
		},
		toBeLessThan: function(expected) {
			if (actual >= expected) {
				throw new Error("Expected < " + expected + " but received " + actual);
			}
		},
		toBeNull: function() {
			if (actual !== null) {
				throw new Error("Expected null but received " + JSON.stringify(actual));
			}
		},
		not: {
			toContain: function(item) {
				if (Array.isArray(actual) && actual.indexOf(item) !== -1) {
					throw new Error("Expected array to NOT contain " + JSON.stringify(item));
				}
			},
			toBe: function(expected) {
				if (actual === expected) {
					throw new Error("Expected value to NOT be " + JSON.stringify(expected));
				}
			},
			toEqual: function(expected) {
				if (__deepEqual(actual, expected)) {
					throw new Error("Expected value to NOT equal " + JSON.stringify(expected));
				}
			}
		}
	};
	base.resolves = {
		toBeUndefined: function() {
			return actual.then(function(val) {
				if (val !== undefined && val !== null) {
					throw new Error("Expected undefined but received " + JSON.stringify(val));
				}
			});
		}
	};
	return base;
}

function __deepEqual(a, b) {
	if (a === b) return true;
	if (a == null || b == null) return false;
	if (typeof a !== typeof b) return false;
	if (Array.isArray(a) && Array.isArray(b)) {
		if (a.length !== b.length) return false;
		for (var i = 0; i < a.length; i++) {
			if (!__deepEqual(a[i], b[i])) return false;
		}
		return true;
	}
	if (typeof a === "object" && typeof b === "object") {
		var keysA = Object.keys(a).sort();
		var keysB = Object.keys(b).sort();
		if (keysA.length !== keysB.length) return false;
		for (var j = 0; j < keysA.length; j++) {
			if (keysA[j] !== keysB[j]) return false;
			if (!__deepEqual(a[keysA[j]], b[keysB[j]])) return false;
		}
		return true;
	}
	return false;
}

async function __runAllTests() {
	for (var i = 0; i < __testQueue.length; i++) {
		var t = __testQueue[i];
		var startTime = Date.now();
		try {
			var result = t.fn();
			if (result && typeof result.then === 'function') {
				await result;
			}
			__testResults.push({
				name: t.name,
				passed: true,
				error: null,
				time: Date.now() - startTime
			});
		} catch (e) {
			__testResults.push({
				name: t.name,
				passed: false,
				error: e.message || String(e),
				time: Date.now() - startTime
			});
		}
	}
}
// Return the Promise from __runAllTests so Node context can await it
`;

// ── Test-code-based execution (Jest-style tests) ──
async function executeWithTestCode(code, testCode) {
	const sandbox = {
		console: { log: () => {}, error: () => {}, warn: () => {} },
		__testResults: [],
		Date: Date,
		setTimeout: setTimeout,
		clearTimeout: clearTimeout,
		setInterval: setInterval,
		clearInterval: clearInterval,
		Promise: Promise,
		require: (moduleName) => {
			if (moduleName === "fs") return fs;
			return {};
		},
	};

	const fullScript = `${MINI_TEST_RUNNER}\n${code}\n${testCode}\n__runAllTests();`;
	const script = new vm.Script(fullScript);
	const context = vm.createContext(sandbox);

	const finalPromise = script.runInContext(context, { timeout: 15000 });
	if (finalPromise && typeof finalPromise.then === "function") {
		await finalPromise;
	}

	const rawResults = sandbox.__testResults;
	const results = rawResults.map((r, i) => ({
		testCase: i + 1,
		passed: r.passed,
		expected: r.name,
		actual: r.passed ? "Passed" : r.error,
		time: r.time,
		error: r.error,
	}));

	return {
		success: true,
		allPassed: results.every((r) => r.passed),
		results,
		totalTests: results.length,
		passedTests: results.filter((r) => r.passed).length,
	};
}

// ── Input/output-based execution (original approach) ──
function executeWithTestCases(code, testCases, functionName) {
	const results = [];

	for (let i = 0; i < testCases.length; i++) {
		const tc = testCases[i];
		const startTime = performance.now();

		try {
			const sandbox = {
				console: { log: () => {}, error: () => {}, warn: () => {} },
				result: undefined,
			};

			const argsStr = JSON.stringify(tc.input);
			const script = new vm.Script(
				`${code}\nresult = ${functionName}(...${argsStr});`,
			);

			const context = vm.createContext(sandbox);
			script.runInContext(context, { timeout: 5000 });

			const actual = sandbox.result;
			const endTime = performance.now();
			const passed = deepEqual(actual, tc.expectedOutput);

			results.push({
				testCase: i + 1,
				passed,
				expected: tc.expectedOutput,
				actual,
				time: Math.round((endTime - startTime) * 100) / 100,
				error: null,
			});
		} catch (err) {
			const endTime = performance.now();
			let errorMessage = err.message;

			if (errorMessage.includes("Script execution timed out")) {
				errorMessage =
					"Time Limit Exceeded — your code took longer than 5 seconds";
			}

			results.push({
				testCase: i + 1,
				passed: false,
				expected: tc.expectedOutput,
				actual: null,
				time: Math.round((endTime - startTime) * 100) / 100,
				error: errorMessage,
			});
		}
	}

	return {
		success: true,
		allPassed: results.every((r) => r.passed),
		results,
		totalTests: results.length,
		passedTests: results.filter((r) => r.passed).length,
	};
}

export async function POST(request) {
	try {
		const body = await request.json();
		const { code, testCases, testCode, functionName } = body;

		if (!code) {
			return NextResponse.json(
				{ error: "Missing required field: code" },
				{ status: 400 },
			);
		}

		let result;

		if (testCode) {
			// Jest-style test code execution
			result = await executeWithTestCode(code, testCode);
		} else if (testCases && functionName) {
			// Original input/output matching execution
			result = executeWithTestCases(code, testCases, functionName);
		} else {
			return NextResponse.json(
				{
					error:
						"Missing required fields: provide testCode or (testCases + functionName)",
				},
				{ status: 400 },
			);
		}

		return NextResponse.json(result);
	} catch (err) {
		let errorMessage = err.message;
		if (errorMessage.includes("Script execution timed out")) {
			errorMessage =
				"Time Limit Exceeded — your code took longer than 10 seconds";
		}
		return NextResponse.json(
			{
				success: false,
				error: "Failed to execute code: " + errorMessage,
			},
			{ status: 500 },
		);
	}
}
