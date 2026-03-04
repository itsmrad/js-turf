export const questions01Async = [
	// ==================== EASY ====================
	{
		id: "01-async-js-1-counter",
		number: 61,
		title: "Counter with setInterval",
		difficulty: "easy",
		category: "01-async-js",
		description: `Create a counter in JavaScript.\nIt should go up as time goes by in intervals of 1 second.\nPrint the output to the console.`,
		functionName: "counter",
		paramNames: [],
		starterCode: `let count = 0;\nfunction updateCounter() {\n  // Your code here\n}\n// Call setInterval here`,
		testCode: `describe('Manual Verification', () => {
    test('Check console output manually', () => {
        expect(true).toBe(true);
    });
});`,
	},
	{
		id: "01-async-js-2-counter",
		number: 62,
		title: "Counter without setInterval",
		difficulty: "easy",
		category: "01-async-js",
		description: `Without using setInterval, try to code a counter in JavaScript.\nHint: setTimeout`,
		functionName: "counter",
		paramNames: [],
		starterCode: `let count = 0;\nfunction updateCounter() {\n  // Your code here\n}\n// Call setTimeout here`,
		testCode: `describe('Manual Verification', () => {
    test('Check console output manually', () => {
        expect(true).toBe(true);
    });
});`,
	},
	{
		id: "01-async-js-read-file",
		number: 63,
		title: "Read Contents of a File",
		difficulty: "easy",
		category: "01-async-js",
		description: `Write code to read contents of a file and print it to the console.\nYou can use the fs library. The goal is to understand async tasks.\nTry to do an expensive operation below the file read and see how it affects the output.`,
		functionName: "readFile",
		paramNames: [],
		starterCode: `const fs = require('fs');\n// Your code here`,
		testCode: `describe('Manual Verification', () => {
    test('Check console output manually', () => {
        expect(true).toBe(true);
    });
});`,
	},
	{
		id: "01-async-js-write-file",
		number: 64,
		title: "Write to a File",
		difficulty: "easy",
		category: "01-async-js",
		description: `Using the fs library again, try to write to the contents of a file.\nThe goal is to understand async tasks.`,
		functionName: "writeFile",
		paramNames: [],
		starterCode: `const fs = require('fs');\n// Your code here`,
		testCode: `describe('Manual Verification', () => {
    test('Check console output manually', () => {
        expect(true).toBe(true);
    });
});`,
	},
	// ==================== MEDIUM ====================
	{
		id: "01-async-js-file-cleaner",
		number: 65,
		title: "File Cleaner",
		difficulty: "medium",
		category: "01-async-js",
		description: `Read a file, remove all the extra spaces and write it back to the same file.\nFor example, if the file input was: "hello     world    my    name   is       raman"\nAfter the program runs, the output should be: "hello world my name is raman"`,
		functionName: "cleanFile",
		paramNames: [],
		starterCode: `const fs = require('fs');\n\nfunction cleanFile(filePath) {\n  // Your code here\n}`,
		testCode: `describe('Manual Verification', () => {
    test('Check console output manually', () => {
        expect(true).toBe(true);
    });
});`,
	},
	{
		id: "01-async-js-clock",
		number: 66,
		title: "Terminal Clock",
		difficulty: "medium",
		category: "01-async-js",
		description: `Create a clock that shows you the current machine time.\nMake it so that it updates every second, and shows time in the following formats:\n- HH:MM::SS (Eg. 13:45:23)\n- HH:MM::SS AM/PM (Eg 01:45:23 PM)`,
		functionName: "clock",
		paramNames: [],
		starterCode: `function displayClock() {\n  // Your code here\n}\nsetInterval(displayClock, 1000);`,
		testCode: `describe('Manual Verification', () => {
    test('Check console output manually', () => {
        expect(true).toBe(true);
    });
});`,
	},
	// ==================== HARD (PROMISES) ====================
	{
		id: "01-async-js-promisify",
		number: 67,
		title: "Promisify setTimeout",
		difficulty: "hard",
		category: "01-async-js",
		description: `Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.`,
		functionName: "wait",
		paramNames: ["n"],
		starterCode: `function wait(n) {\n  \n}`,
		testCode: `describe("wait function", () => {
  test("resolves after 1 second", () => {
    const start = Date.now();
    return expect(wait(1))
      .resolves.toBeUndefined()
      .then(() => {
        const end = Date.now();
        const difference = end - start;
        expect(difference).toBeGreaterThanOrEqual(1000);
      });
  }, 2000);

  test("resolves after 2 seconds", () => {
    const start = Date.now();
    return expect(wait(2))
      .resolves.toBeUndefined()
      .then(() => {
        const end = Date.now();
        const difference = end - start;
        expect(difference).toBeGreaterThanOrEqual(2000);
      });
  }, 3000);

  test("resolves after 3 seconds", () => {
    const start = Date.now();
    return expect(wait(3))
      .resolves.toBeUndefined()
      .then(() => {
        const end = Date.now();
        const difference = end - start;
        expect(difference).toBeGreaterThanOrEqual(3000);
      });
  }, 4000);
});`,
	},
	{
		id: "01-async-js-sleep",
		number: 68,
		title: "Sleep Completely",
		difficulty: "hard",
		category: "01-async-js",
		description: `Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.\nDuring this time the thread should not be able to do anything else.\nThe function should return a promise just like before.`,
		functionName: "sleep",
		paramNames: ["milliseconds"],
		starterCode: `function sleep(milliseconds) {\n  \n}`,
		testCode: `describe("sleep function", () => {
  test("resolves after 1 second", () => {
    const start = Date.now();
    return expect(sleep(1000))
      .resolves.toBeUndefined()
      .then(() => {
        const end = Date.now();
        const difference = end - start;
        expect(difference).toBeGreaterThanOrEqual(1000);
      });
  }, 2000);

  test("resolves after 2 seconds", () => {
    const start = Date.now();
    return expect(sleep(2000))
      .resolves.toBeUndefined()
      .then(() => {
        const end = Date.now();
        const difference = end - start;
        expect(difference).toBeGreaterThanOrEqual(2000);
      });
  }, 3000);

  test("resolves after 3 seconds", () => {
    const start = Date.now();
    return expect(sleep(3000))
      .resolves.toBeUndefined()
      .then(() => {
        const end = Date.now();
        const difference = end - start;
        expect(difference).toBeGreaterThanOrEqual(3000);
      });
  }, 4000);
});`,
	},
	{
		id: "01-async-js-promise-all",
		number: 69,
		title: "Promise All",
		difficulty: "hard",
		category: "01-async-js",
		description: `Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.\nWrite a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all.\nReturn a promise.all which return the time in milliseconds it takes to complete the entire operation.`,
		functionName: "calculateTime",
		paramNames: ["t1", "t2", "t3"],
		starterCode: `function wait1(t) {\n\n}\n\nfunction wait2(t) {\n\n}\n\nfunction wait3(t) {\n\n}\n\nfunction calculateTime(t1, t2, t3) {\n\n}`,
		testCode: `describe("calculateTime function", () => {
  test("calculates time 1", async () => {
    const difference = await calculateTime(1, 2, 3);
    expect(difference).toBeGreaterThanOrEqual(3000);
    expect(difference).toBeLessThan(4000);
  }, 4000);

  test("calculates time 2", async () => {
    const difference = await calculateTime(4, 5, 7);
    expect(difference).toBeGreaterThanOrEqual(7000);
    expect(difference).toBeLessThan(8000);
  }, 8000);

  test("calculates time 3", async () => {
    const difference = await calculateTime(10, 1, 1);
    expect(difference).toBeGreaterThanOrEqual(10000);
    expect(difference).toBeLessThan(11000);
  }, 11000);

  test("calculates time for zero seconds", async () => {
    const difference = await calculateTime(0, 0, 0);
    expect(difference).toBeGreaterThanOrEqual(0);
    expect(difference).toBeLessThan(1000);
  }, 1000);
});`,
	},
	{
		id: "01-async-js-promise-chain",
		number: 70,
		title: "Promise Chain",
		difficulty: "hard",
		category: "01-async-js",
		description: `Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.\nWrite a function that sequentially calls all 3 of these functions in order.\nReturn a promise chain which return the time in milliseconds it takes to complete the entire operation.\nCompare it with the results from 3-promise-all.js.`,
		functionName: "calculateTime",
		paramNames: ["t1", "t2", "t3"],
		starterCode: `function wait1(t) {\n\n}\n\nfunction wait2(t) {\n\n}\n\nfunction wait3(t) {\n\n}\n\nfunction calculateTime(t1, t2, t3) {\n\n}`,
		testCode: `describe("calculateTime function", () => {
  test("calculates time 1", async () => {
    const difference = await calculateTime(1, 2, 3);
    expect(difference).toBeGreaterThanOrEqual(6000);
    expect(difference).toBeLessThan(7000);
  }, 7000);

  test("calculates time 2", async () => {
    const difference = await calculateTime(10, 1, 1);
    expect(difference).toBeGreaterThanOrEqual(12000);
    expect(difference).toBeLessThan(13000);
  }, 14000);

  test("calculates time for zero seconds", async () => {
    const difference = await calculateTime(0, 0, 0);
    expect(difference).toBeGreaterThanOrEqual(0);
    expect(difference).toBeLessThan(100);
  }, 100);
});`,
	},
];
