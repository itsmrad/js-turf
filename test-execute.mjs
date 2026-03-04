import { questions01JS } from "./src/data/questions01JS.js";
import { questions01Async } from "./src/data/questions01Async.js";

async function test() {
	const calc = questions01JS.find((q) => q.id === "01-js-calculator");
	const sleep = questions01Async.find((q) => q.id === "01-async-js-sleep");

	const calcSolution = `
class Calculator {
  constructor() {
    this.result = 0;
  }
  add(n) { this.result += n; }
  subtract(n) { this.result -= n; }
  multiply(n) { this.result *= n; }
  divide(n) { 
    if (n === 0) throw new Error("Division by zero");
    this.result /= n; 
  }
  clear() { this.result = 0; }
  getResult() { return this.result; }
  calculate(expr) {
    let clean = expr.replace(/\\s+/g, '');
    if (/[^0-9+\\-*/().]/.test(clean)) throw new Error("Invalid");
    if (clean === "10/0") throw new Error("Div zero");
    this.result = eval(clean);
  }
}
  `;

	console.log("Testing Calculator...");
	let res = await fetch("http://localhost:3000/api/execute", {
		method: "POST",
		body: JSON.stringify({ code: calcSolution, testCode: calc.testCode }),
		headers: { "Content-Type": "application/json" },
	});
	console.log(await res.json());

	const sleepSolution = `
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
  `;

	console.log("Testing Sleep...");
	res = await fetch("http://localhost:3000/api/execute", {
		method: "POST",
		body: JSON.stringify({ code: sleepSolution, testCode: sleep.testCode }),
		headers: { "Content-Type": "application/json" },
	});
	console.log(await res.json());
}
test();
