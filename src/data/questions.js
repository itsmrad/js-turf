import { questionsBuiltins } from "./questionsBuiltins";
import { questions01JS } from "./questions01JS";
import { questions01Async } from "./questions01Async";

const jsBasicsQuestions = [
	// ==================== BASIC (1-19) ====================
	{
		id: "js-basics-1",
		number: 1,
		title: "Sum Values in Object Arrays",
		difficulty: "basic",
		category: "js-basics",
		description: `Given an object where each key maps to an array of numbers, return a new object where each key maps to the sum of its array values.`,
		examples: [
			{
				input: `{ food: [10, 20, 30], travel: [5, 15], bills: [40, 60] }`,
				output: `{ food: 60, travel: 20, bills: 100 }`,
			},
		],
		functionName: "sumValues",
		paramNames: ["input"],
		starterCode: `function sumValues(input) {\n  // Your code here\n}`,
		testCases: [
			{
				input: [{ food: [10, 20, 30], travel: [5, 15], bills: [40, 60] }],
				expectedOutput: { food: 60, travel: 20, bills: 100 },
			},
			{
				input: [{ a: [1, 2, 3], b: [10] }],
				expectedOutput: { a: 6, b: 10 },
			},
			{
				input: [{ x: [] }],
				expectedOutput: { x: 0 },
			},
		],
	},
	{
		id: "js-basics-2",
		number: 2,
		title: "Count Word Occurrences in Array",
		difficulty: "basic",
		category: "js-basics",
		description: `Given an array of strings, return an object with each unique string as a key and its count as the value.`,
		examples: [
			{
				input: `["apple", "banana", "apple", "orange", "banana", "apple"]`,
				output: `{ apple: 3, banana: 2, orange: 1 }`,
			},
		],
		functionName: "countWords",
		paramNames: ["arr"],
		starterCode: `function countWords(arr) {\n  // Your code here\n}`,
		testCases: [
			{
				input: [["apple", "banana", "apple", "orange", "banana", "apple"]],
				expectedOutput: { apple: 3, banana: 2, orange: 1 },
			},
			{
				input: [["a", "b", "a"]],
				expectedOutput: { a: 2, b: 1 },
			},
			{
				input: [["hello"]],
				expectedOutput: { hello: 1 },
			},
		],
	},
	{
		id: "js-basics-3",
		number: 3,
		title: "Swap Keys and Values of Object",
		difficulty: "basic",
		category: "js-basics",
		description: `Given an object, return a new object where keys and values are swapped.`,
		examples: [
			{
				input: `{ a: "x", b: "y", c: "z" }`,
				output: `{ x: "a", y: "b", z: "c" }`,
			},
		],
		functionName: "swapKeysValues",
		paramNames: ["obj"],
		starterCode: `function swapKeysValues(obj) {\n  // Your code here\n}`,
		testCases: [
			{
				input: [{ a: "x", b: "y", c: "z" }],
				expectedOutput: { x: "a", y: "b", z: "c" },
			},
			{
				input: [{ name: "value" }],
				expectedOutput: { value: "name" },
			},
		],
	},
	{
		id: "js-basics-4",
		number: 4,
		title: "Find the Largest Value Key",
		difficulty: "basic",
		category: "js-basics",
		description: `Given an object with numeric values, return the key that has the largest value.`,
		examples: [
			{
				input: `{ a: 10, b: 50, c: 20 }`,
				output: `"b"`,
			},
		],
		functionName: "largestKey",
		paramNames: ["obj"],
		starterCode: `function largestKey(obj) {\n  // Your code here\n}`,
		testCases: [
			{
				input: [{ a: 10, b: 50, c: 20 }],
				expectedOutput: "b",
			},
			{
				input: [{ x: 100, y: 5 }],
				expectedOutput: "x",
			},
			{
				input: [{ single: 42 }],
				expectedOutput: "single",
			},
		],
	},
	{
		id: "js-basics-5",
		number: 5,
		title: "Flatten Object of Arrays",
		difficulty: "basic",
		category: "js-basics",
		description: `Given an object where each key maps to an array, flatten all arrays into a single array.`,
		examples: [
			{
				input: `{ fruits: ["apple", "banana"], veggies: ["carrot", "pea"] }`,
				output: `["apple", "banana", "carrot", "pea"]`,
			},
		],
		functionName: "flattenObject",
		paramNames: ["obj"],
		starterCode: `function flattenObject(obj) {\n  // Your code here\n}`,
		testCases: [
			{
				input: [{ fruits: ["apple", "banana"], veggies: ["carrot", "pea"] }],
				expectedOutput: ["apple", "banana", "carrot", "pea"],
			},
			{
				input: [{ a: [1, 2], b: [3] }],
				expectedOutput: [1, 2, 3],
			},
		],
	},
	{
		id: "js-basics-6",
		number: 6,
		title: "Group People by City",
		difficulty: "basic",
		category: "js-basics",
		description: `Given an array of people objects with name and city, group names by city.`,
		examples: [
			{
				input: `[
  { name: "A", city: "Delhi" },
  { name: "B", city: "Mumbai" },
  { name: "C", city: "Delhi" }
]`,
				output: `{ Delhi: ["A", "C"], Mumbai: ["B"] }`,
			},
		],
		functionName: "groupByCity",
		paramNames: ["people"],
		starterCode: `function groupByCity(people) {\n  // Your code here\n}`,
		testCases: [
			{
				input: [
					[
						{ name: "A", city: "Delhi" },
						{ name: "B", city: "Mumbai" },
						{ name: "C", city: "Delhi" },
					],
				],
				expectedOutput: { Delhi: ["A", "C"], Mumbai: ["B"] },
			},
			{
				input: [[{ name: "X", city: "NY" }]],
				expectedOutput: { NY: ["X"] },
			},
		],
	},
	{
		id: "js-basics-7",
		number: 7,
		title: "Filter Object by Values > 50",
		difficulty: "basic",
		category: "js-basics",
		description: `Given an object with numeric values, return a new object containing only entries where the value is greater than 50.`,
		examples: [
			{
				input: `{ a: 20, b: 60, c: 40, d: 90 }`,
				output: `{ b: 60, d: 90 }`,
			},
		],
		functionName: "filterByValue",
		paramNames: ["obj"],
		starterCode: `function filterByValue(obj) {\n  // Your code here\n}`,
		testCases: [
			{
				input: [{ a: 20, b: 60, c: 40, d: 90 }],
				expectedOutput: { b: 60, d: 90 },
			},
			{
				input: [{ x: 100, y: 10 }],
				expectedOutput: { x: 100 },
			},
			{
				input: [{ a: 1, b: 2 }],
				expectedOutput: {},
			},
		],
	},
	{
		id: "js-basics-8",
		number: 8,
		title: "Find Student with Highest Average",
		difficulty: "basic",
		category: "js-basics",
		description: `Given an object where keys are student names and values are arrays of marks, return the student name with the highest average.`,
		examples: [
			{
				input: `{ A: [80, 90], B: [70, 75, 85] }`,
				output: `"A"`,
			},
		],
		functionName: "topStudent",
		paramNames: ["students"],
		starterCode: `function topStudent(students) {\n  // Your code here\n}`,
		testCases: [
			{
				input: [{ A: [80, 90], B: [70, 75, 85] }],
				expectedOutput: "A",
			},
			{
				input: [{ X: [100], Y: [50, 60] }],
				expectedOutput: "X",
			},
		],
	},
	{
		id: "js-basics-9",
		number: 9,
		title: "Unique Values Across Object Arrays",
		difficulty: "basic",
		category: "js-basics",
		description: `Given an object where each key maps to an array, return a single array of unique values across all arrays.`,
		examples: [
			{
				input: `{ x: [1,2,3], y: [2,3,4], z: [4,5] }`,
				output: `[1,2,3,4,5]`,
			},
		],
		functionName: "uniqueValues",
		paramNames: ["obj"],
		starterCode: `function uniqueValues(obj) {\n  // Your code here\n}`,
		testCases: [
			{
				input: [{ x: [1, 2, 3], y: [2, 3, 4], z: [4, 5] }],
				expectedOutput: [1, 2, 3, 4, 5],
			},
			{
				input: [{ a: [1, 1], b: [1] }],
				expectedOutput: [1],
			},
		],
	},
	{
		id: "js-basics-10",
		number: 10,
		title: "Pick Only Given Keys from Object",
		difficulty: "basic",
		category: "js-basics",
		description: `Given an object and an array of keys, return a new object containing only the specified keys.`,
		examples: [
			{
				input: `{ name: "Rahul", age: 23, city: "Noida" }, ["name","city"]`,
				output: `{ name: "Rahul", city: "Noida" }`,
			},
		],
		functionName: "pickKeys",
		paramNames: ["obj", "keys"],
		starterCode: `function pickKeys(obj, keys) {\n  // Your code here\n}`,
		testCases: [
			{
				input: [{ name: "Rahul", age: 23, city: "Noida" }, ["name", "city"]],
				expectedOutput: { name: "Rahul", city: "Noida" },
			},
			{
				input: [{ a: 1, b: 2, c: 3 }, ["b"]],
				expectedOutput: { b: 2 },
			},
		],
	},
	{
		id: "js-basics-11",
		number: 11,
		title: "Sort Object Entries by Values",
		difficulty: "basic",
		category: "js-basics",
		description: `Given an object with numeric values, return an array of [key, value] pairs sorted by value in ascending order.`,
		examples: [
			{
				input: `{ a: 3, b: 1, c: 2 }`,
				output: `[["b",1], ["c",2], ["a",3]]`,
			},
		],
		functionName: "sortEntries",
		paramNames: ["obj"],
		starterCode: `function sortEntries(obj) {\n  // Your code here\n}`,
		testCases: [
			{
				input: [{ a: 3, b: 1, c: 2 }],
				expectedOutput: [
					["b", 1],
					["c", 2],
					["a", 3],
				],
			},
			{
				input: [{ x: 10, y: 5 }],
				expectedOutput: [
					["y", 5],
					["x", 10],
				],
			},
		],
	},
	{
		id: "js-basics-12",
		number: 12,
		title: "Count Number of Keys in Object",
		difficulty: "basic",
		category: "js-basics",
		description: `Given an object, return the number of keys it contains.`,
		examples: [
			{
				input: `{ a: 1, b: 2, c: 3 }`,
				output: `3`,
			},
		],
		functionName: "countKeys",
		paramNames: ["obj"],
		starterCode: `function countKeys(obj) {\n  // Your code here\n}`,
		testCases: [
			{
				input: [{ a: 1, b: 2, c: 3 }],
				expectedOutput: 3,
			},
			{
				input: [{}],
				expectedOutput: 0,
			},
			{
				input: [{ x: 1 }],
				expectedOutput: 1,
			},
		],
	},
	{
		id: "js-basics-13",
		number: 13,
		title: "Capitalize String Values in Object",
		difficulty: "basic",
		category: "js-basics",
		description: `Given an object with string values, return a new object where each string value has its first letter capitalized.`,
		examples: [
			{
				input: `{ name: "alice", city: "delhi" }`,
				output: `{ name: "Alice", city: "Delhi" }`,
			},
		],
		functionName: "capitalizeValues",
		paramNames: ["obj"],
		starterCode: `function capitalizeValues(obj) {\n  // Your code here\n}`,
		testCases: [
			{
				input: [{ name: "alice", city: "delhi" }],
				expectedOutput: { name: "Alice", city: "Delhi" },
			},
			{
				input: [{ a: "hello" }],
				expectedOutput: { a: "Hello" },
			},
		],
	},
	{
		id: "js-basics-14",
		number: 14,
		title: "Convert Object to Query String",
		difficulty: "basic",
		category: "js-basics",
		description: `Given an object, convert it to a URL query string format (key=value pairs joined by &).`,
		examples: [
			{
				input: `{ name: "Alice", age: 25 }`,
				output: `"name=Alice&age=25"`,
			},
		],
		functionName: "toQueryString",
		paramNames: ["obj"],
		starterCode: `function toQueryString(obj) {\n  // Your code here\n}`,
		testCases: [
			{
				input: [{ name: "Alice", age: 25 }],
				expectedOutput: "name=Alice&age=25",
			},
			{
				input: [{ x: 1 }],
				expectedOutput: "x=1",
			},
		],
	},
	{
		id: "js-basics-15",
		number: 15,
		title: "Count Even and Odd Numbers",
		difficulty: "basic",
		category: "js-basics",
		description: `Given an array of numbers, return an object with the count of even and odd numbers.`,
		examples: [
			{
				input: `[1,2,3,4,5,6]`,
				output: `{ even: 3, odd: 3 }`,
			},
		],
		functionName: "countEvenOdd",
		paramNames: ["arr"],
		starterCode: `function countEvenOdd(arr) {\n  // Your code here\n}`,
		testCases: [
			{
				input: [[1, 2, 3, 4, 5, 6]],
				expectedOutput: { even: 3, odd: 3 },
			},
			{
				input: [[2, 4, 6]],
				expectedOutput: { even: 3, odd: 0 },
			},
			{
				input: [[1, 3]],
				expectedOutput: { even: 0, odd: 2 },
			},
		],
	},
	{
		id: "js-basics-16",
		number: 16,
		title: "Find Common Keys Between Two Objects",
		difficulty: "basic",
		category: "js-basics",
		description: `Given two objects, return an array of keys that exist in both objects.`,
		examples: [
			{
				input: `{ a: 1, b: 2, c: 3 }, { b: 4, c: 5, d: 6 }`,
				output: `["b","c"]`,
			},
		],
		functionName: "commonKeys",
		paramNames: ["obj1", "obj2"],
		starterCode: `function commonKeys(obj1, obj2) {\n  // Your code here\n}`,
		testCases: [
			{
				input: [
					{ a: 1, b: 2, c: 3 },
					{ b: 4, c: 5, d: 6 },
				],
				expectedOutput: ["b", "c"],
			},
			{
				input: [{ x: 1 }, { y: 2 }],
				expectedOutput: [],
			},
		],
	},
	{
		id: "js-basics-17",
		number: 17,
		title: "Convert Array of Objects to Lookup by ID",
		difficulty: "basic",
		category: "js-basics",
		description: `Given an array of objects each with an id property, convert it to an object keyed by id.`,
		examples: [
			{
				input: `[{ id: 1, name: "A" }, { id: 2, name: "B" }]`,
				output: `{ 1: { id: 1, name: "A" }, 2: { id: 2, name: "B" } }`,
			},
		],
		functionName: "toLookup",
		paramNames: ["arr"],
		starterCode: `function toLookup(arr) {\n  // Your code here\n}`,
		testCases: [
			{
				input: [
					[
						{ id: 1, name: "A" },
						{ id: 2, name: "B" },
					],
				],
				expectedOutput: { 1: { id: 1, name: "A" }, 2: { id: 2, name: "B" } },
			},
		],
	},
	{
		id: "js-basics-18",
		number: 18,
		title: "Check if All Values are Numbers",
		difficulty: "basic",
		category: "js-basics",
		description: `Given an object, return true if all values are numbers, false otherwise.`,
		examples: [
			{
				input: `{ a: 1, b: "hello", c: 3 }`,
				output: `false`,
			},
		],
		functionName: "allNumbers",
		paramNames: ["obj"],
		starterCode: `function allNumbers(obj) {\n  // Your code here\n}`,
		testCases: [
			{
				input: [{ a: 1, b: "hello", c: 3 }],
				expectedOutput: false,
			},
			{
				input: [{ a: 1, b: 2 }],
				expectedOutput: true,
			},
			{
				input: [{}],
				expectedOutput: true,
			},
		],
	},

	// ==================== INTERMEDIATE (19-38) ====================
	{
		id: "js-basics-19",
		number: 19,
		title: "Sum All Transactions Per User",
		difficulty: "intermediate",
		category: "js-basics",
		description: `Given an array of transaction objects with user and amount, return an object with the total amount per user.`,
		examples: [
			{
				input: `[
  { user: "A", amount: 100 },
  { user: "B", amount: 200 },
  { user: "A", amount: 50 }
]`,
				output: `{ A: 150, B: 200 }`,
			},
		],
		functionName: "sumTransactions",
		paramNames: ["transactions"],
		starterCode: `function sumTransactions(transactions) {\n  // Your code here\n}`,
		testCases: [
			{
				input: [
					[
						{ user: "A", amount: 100 },
						{ user: "B", amount: 200 },
						{ user: "A", amount: 50 },
					],
				],
				expectedOutput: { A: 150, B: 200 },
			},
			{
				input: [[{ user: "X", amount: 10 }]],
				expectedOutput: { X: 10 },
			},
		],
	},
	{
		id: "js-basics-20",
		number: 20,
		title: "Transform API Response (id → name)",
		difficulty: "intermediate",
		category: "js-basics",
		description: `Given an array of objects with id and name, return an object mapping id to name.`,
		examples: [
			{
				input: `[{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }]`,
				output: `{ 1: "Alice", 2: "Bob" }`,
			},
		],
		functionName: "transformResponse",
		paramNames: ["data"],
		starterCode: `function transformResponse(data) {\n  // Your code here\n}`,
		testCases: [
			{
				input: [
					[
						{ id: 1, name: "Alice" },
						{ id: 2, name: "Bob" },
					],
				],
				expectedOutput: { 1: "Alice", 2: "Bob" },
			},
		],
	},
	{
		id: "js-basics-21",
		number: 21,
		title: "Remove Falsy Values from Object",
		difficulty: "intermediate",
		category: "js-basics",
		description: `Given an object, return a new object with all falsy values (0, null, undefined, "", false, NaN) removed.`,
		examples: [
			{
				input: `{ a: 0, b: null, c: "hello", d: undefined, e: 5 }`,
				output: `{ c: "hello", e: 5 }`,
			},
		],
		functionName: "removeFalsy",
		paramNames: ["obj"],
		starterCode: `function removeFalsy(obj) {\n  // Your code here\n}`,
		testCases: [
			{
				input: [{ a: 0, b: null, c: "hello", d: undefined, e: 5 }],
				expectedOutput: { c: "hello", e: 5 },
			},
			{
				input: [{ x: false, y: "hey" }],
				expectedOutput: { y: "hey" },
			},
		],
	},
	{
		id: "js-basics-22",
		number: 22,
		title: "Check Permissions from Roles",
		difficulty: "intermediate",
		category: "js-basics",
		description: `Given a roles object mapping role names to permission arrays, a role name, and an action, return whether that role has the given permission.`,
		examples: [
			{
				input: `roles = { admin: ["read","write"], user: ["read"], staff: ["write"] }, checkRole = "user", action = "write"`,
				output: `false`,
			},
		],
		functionName: "hasPermission",
		paramNames: ["roles", "checkRole", "action"],
		starterCode: `function hasPermission(roles, checkRole, action) {\n  // Your code here\n}`,
		testCases: [
			{
				input: [
					{ admin: ["read", "write"], user: ["read"], staff: ["write"] },
					"user",
					"write",
				],
				expectedOutput: false,
			},
			{
				input: [{ admin: ["read", "write"], user: ["read"] }, "admin", "write"],
				expectedOutput: true,
			},
			{
				input: [{ viewer: ["read"] }, "editor", "read"],
				expectedOutput: false,
			},
		],
	},
	{
		id: "js-basics-23",
		number: 23,
		title: "Revenue Per Category",
		difficulty: "intermediate",
		category: "js-basics",
		description: `Given an array of order objects with category and price, return total revenue per category.`,
		examples: [
			{
				input: `[
  { id: 1, category: "electronics", price: 100 },
  { id: 2, category: "clothes", price: 50 },
  { id: 3, category: "electronics", price: 200 }
]`,
				output: `{ electronics: 300, clothes: 50 }`,
			},
		],
		functionName: "revenueByCategory",
		paramNames: ["orders"],
		starterCode: `function revenueByCategory(orders) {\n  // Your code here\n}`,
		testCases: [
			{
				input: [
					[
						{ id: 1, category: "electronics", price: 100 },
						{ id: 2, category: "clothes", price: 50 },
						{ id: 3, category: "electronics", price: 200 },
					],
				],
				expectedOutput: { electronics: 300, clothes: 50 },
			},
		],
	},
	{
		id: "js-basics-24",
		number: 24,
		title: "Remove Duplicate Objects by ID",
		difficulty: "intermediate",
		category: "js-basics",
		description: `Given an array of objects with id, return a new array with duplicates removed (keep first occurrence).`,
		examples: [
			{
				input: `[{ id: 1, name: "A" }, { id: 2, name: "B" }, { id: 1, name: "A" }]`,
				output: `[{ id: 1, name: "A" }, { id: 2, name: "B" }]`,
			},
		],
		functionName: "removeDuplicates",
		paramNames: ["arr"],
		starterCode: `function removeDuplicates(arr) {\n  // Your code here\n}`,
		testCases: [
			{
				input: [
					[
						{ id: 1, name: "A" },
						{ id: 2, name: "B" },
						{ id: 1, name: "A" },
					],
				],
				expectedOutput: [
					{ id: 1, name: "A" },
					{ id: 2, name: "B" },
				],
			},
		],
	},
	{
		id: "js-basics-25",
		number: 25,
		title: "Chunk Object Entries",
		difficulty: "intermediate",
		category: "js-basics",
		description: `Given an object and a chunk size, split the object entries into groups of the given size.`,
		examples: [
			{
				input: `{ a: 1, b: 2, c: 3, d: 4 }, size = 2`,
				output: `[ [["a",1],["b",2]], [["c",3],["d",4]] ]`,
			},
		],
		functionName: "chunkEntries",
		paramNames: ["obj", "size"],
		starterCode: `function chunkEntries(obj, size) {\n  // Your code here\n}`,
		testCases: [
			{
				input: [{ a: 1, b: 2, c: 3, d: 4 }, 2],
				expectedOutput: [
					[
						["a", 1],
						["b", 2],
					],
					[
						["c", 3],
						["d", 4],
					],
				],
			},
			{
				input: [{ x: 10, y: 20, z: 30 }, 2],
				expectedOutput: [
					[
						["x", 10],
						["y", 20],
					],
					[["z", 30]],
				],
			},
		],
	},
	{
		id: "js-basics-26",
		number: 26,
		title: "Find Longest String in Object Values",
		difficulty: "intermediate",
		category: "js-basics",
		description: `Given an object with string values, return the longest string value.`,
		examples: [
			{
				input: `{ a: "apple", b: "banana", c: "kiwi" }`,
				output: `"banana"`,
			},
		],
		functionName: "longestValue",
		paramNames: ["obj"],
		starterCode: `function longestValue(obj) {\n  // Your code here\n}`,
		testCases: [
			{
				input: [{ a: "apple", b: "banana", c: "kiwi" }],
				expectedOutput: "banana",
			},
			{
				input: [{ x: "hi", y: "hello" }],
				expectedOutput: "hello",
			},
		],
	},
	{
		id: "js-basics-27",
		number: 27,
		title: "Transpose Translation Object",
		difficulty: "intermediate",
		category: "js-basics",
		description: `Given an object where top-level keys are languages and values are translation objects, transpose it so translation keys become top-level with language sub-keys.`,
		examples: [
			{
				input: `{
  en: { hello: "Hello", bye: "Goodbye" },
  fr: { hello: "Bonjour", bye: "Au revoir" },
  es: { hello: "Hola" }
}`,
				output: `{
  hello: { en: "Hello", fr: "Bonjour", es: "Hola" },
  bye: { en: "Goodbye", fr: "Au revoir" }
}`,
			},
		],
		functionName: "transposeTranslations",
		paramNames: ["translations"],
		starterCode: `function transposeTranslations(translations) {\n  // Your code here\n}`,
		testCases: [
			{
				input: [
					{
						en: { hello: "Hello", bye: "Goodbye" },
						fr: { hello: "Bonjour", bye: "Au revoir" },
						es: { hello: "Hola" },
					},
				],
				expectedOutput: {
					hello: { en: "Hello", fr: "Bonjour", es: "Hola" },
					bye: { en: "Goodbye", fr: "Au revoir" },
				},
			},
		],
	},
	{
		id: "js-basics-28",
		number: 28,
		title: "Build Index by Category",
		difficulty: "intermediate",
		category: "js-basics",
		description: `Given an array of objects with id and category, group ids by category.`,
		examples: [
			{
				input: `[{ id: 1, category: "fruit" }, { id: 2, category: "veggie" }, { id: 3, category: "fruit" }]`,
				output: `{ fruit: [1,3], veggie: [2] }`,
			},
		],
		functionName: "buildIndex",
		paramNames: ["items"],
		starterCode: `function buildIndex(items) {\n  // Your code here\n}`,
		testCases: [
			{
				input: [
					[
						{ id: 1, category: "fruit" },
						{ id: 2, category: "veggie" },
						{ id: 3, category: "fruit" },
					],
				],
				expectedOutput: { fruit: [1, 3], veggie: [2] },
			},
		],
	},
	{
		id: "js-basics-29",
		number: 29,
		title: "Remove Deeply Nested Key",
		difficulty: "intermediate",
		category: "js-basics",
		description: `Given a nested object and a key name, recursively remove all occurrences of that key.`,
		examples: [
			{
				input: `{ a: { b: { c: 1, d: 2 } } }, remove "c"`,
				output: `{ a: { b: { d: 2 } } }`,
			},
		],
		functionName: "removeKey",
		paramNames: ["obj", "key"],
		starterCode: `function removeKey(obj, key) {\n  // Your code here\n}`,
		testCases: [
			{
				input: [{ a: { b: { c: 1, d: 2 } } }, "c"],
				expectedOutput: { a: { b: { d: 2 } } },
			},
			{
				input: [{ x: 1, y: { x: 2 } }, "x"],
				expectedOutput: { y: {} },
			},
		],
	},
	{
		id: "js-basics-30",
		number: 30,
		title: "Deep Equal Check",
		difficulty: "intermediate",
		category: "js-basics",
		description: `Given two objects, check if they are deeply equal (same structure and values).`,
		examples: [
			{
				input: `{ a: { x: 1, y: 2 } }, { a: { x: 1, y: 2 } }`,
				output: `true`,
			},
		],
		functionName: "deepEqual",
		paramNames: ["obj1", "obj2"],
		starterCode: `function deepEqual(obj1, obj2) {\n  // Your code here\n}`,
		testCases: [
			{
				input: [{ a: { x: 1, y: 2 } }, { a: { x: 1, y: 2 } }],
				expectedOutput: true,
			},
			{
				input: [{ a: 1 }, { a: 2 }],
				expectedOutput: false,
			},
			{
				input: [{ a: { b: 1 } }, { a: { b: 1, c: 2 } }],
				expectedOutput: false,
			},
		],
	},
	{
		id: "js-basics-31",
		number: 31,
		title: "Deep Flatten Nested Arrays in Object",
		difficulty: "intermediate",
		category: "js-basics",
		description: `Given an object where values are nested arrays, deeply flatten each array.`,
		examples: [
			{
				input: `{ a: [1, [2, [3]]], b: [4, [5]] }`,
				output: `{ a: [1,2,3], b: [4,5] }`,
			},
		],
		functionName: "deepFlatten",
		paramNames: ["obj"],
		starterCode: `function deepFlatten(obj) {\n  // Your code here\n}`,
		testCases: [
			{
				input: [{ a: [1, [2, [3]]], b: [4, [5]] }],
				expectedOutput: { a: [1, 2, 3], b: [4, 5] },
			},
			{
				input: [{ x: [[1, [2]], 3] }],
				expectedOutput: { x: [1, 2, 3] },
			},
		],
	},
	{
		id: "js-basics-32",
		number: 32,
		title: "Most Repeated Word Across Categories",
		difficulty: "intermediate",
		category: "js-basics",
		description: `Given an object where keys are categories and values are word arrays, find the most repeated word across all categories.`,
		examples: [
			{
				input: `{ fruits: ["apple","apple","banana"], drinks: ["apple","tea"] }`,
				output: `"apple"`,
			},
		],
		functionName: "mostRepeated",
		paramNames: ["categories"],
		starterCode: `function mostRepeated(categories) {\n  // Your code here\n}`,
		testCases: [
			{
				input: [
					{
						fruits: ["apple", "apple", "banana"],
						drinks: ["apple", "tea"],
					},
				],
				expectedOutput: "apple",
			},
			{
				input: [{ a: ["x", "x"], b: ["y", "y", "y"] }],
				expectedOutput: "y",
			},
		],
	},
	{
		id: "js-basics-33",
		number: 33,
		title: "Intersection of All Arrays in Object",
		difficulty: "intermediate",
		category: "js-basics",
		description: `Given an object where values are arrays, return elements common to ALL arrays.`,
		examples: [
			{
				input: `{ a: [1,2,3], b: [2,3,4], c: [3,4,5] }`,
				output: `[3]`,
			},
		],
		functionName: "intersectAll",
		paramNames: ["obj"],
		starterCode: `function intersectAll(obj) {\n  // Your code here\n}`,
		testCases: [
			{
				input: [{ a: [1, 2, 3], b: [2, 3, 4], c: [3, 4, 5] }],
				expectedOutput: [3],
			},
			{
				input: [{ x: [1, 2], y: [3, 4] }],
				expectedOutput: [],
			},
		],
	},
	{
		id: "js-basics-34",
		number: 34,
		title: "Deep Merge Two Nested Objects",
		difficulty: "intermediate",
		category: "js-basics",
		description: `Given two nested objects, deeply merge them. Values from the second object override the first.`,
		examples: [
			{
				input: `{ a: { x: 1, y: 2 } }, { a: { y: 3, z: 4 } }`,
				output: `{ a: { x: 1, y: 3, z: 4 } }`,
			},
		],
		functionName: "deepMerge",
		paramNames: ["obj1", "obj2"],
		starterCode: `function deepMerge(obj1, obj2) {\n  // Your code here\n}`,
		testCases: [
			{
				input: [{ a: { x: 1, y: 2 } }, { a: { y: 3, z: 4 } }],
				expectedOutput: { a: { x: 1, y: 3, z: 4 } },
			},
			{
				input: [{ a: 1 }, { b: 2 }],
				expectedOutput: { a: 1, b: 2 },
			},
		],
	},
	{
		id: "js-basics-35",
		number: 35,
		title: "Nested Object Destructuring",
		difficulty: "intermediate",
		category: "js-basics",
		description: `Given a nested object with user.profile.name and user.profile.age, extract and return them as a string "name age".`,
		examples: [
			{
				input: `{ user: { profile: { name: "Alice", age: 25 } } }`,
				output: `"Alice 25"`,
			},
		],
		functionName: "extractProfile",
		paramNames: ["data"],
		starterCode: `function extractProfile(data) {\n  // Your code here\n}`,
		testCases: [
			{
				input: [{ user: { profile: { name: "Alice", age: 25 } } }],
				expectedOutput: "Alice 25",
			},
			{
				input: [{ user: { profile: { name: "Bob", age: 30 } } }],
				expectedOutput: "Bob 30",
			},
		],
	},
	{
		id: "js-basics-36",
		number: 36,
		title: "Find Top N Keys by Value",
		difficulty: "intermediate",
		category: "js-basics",
		description: `Given an object with numeric values and a number N, return the N keys with the highest values.`,
		examples: [
			{
				input: `{ a: 10, b: 50, c: 30, d: 40 }, N = 2`,
				output: `["b","d"]`,
			},
		],
		functionName: "topNKeys",
		paramNames: ["obj", "n"],
		starterCode: `function topNKeys(obj, n) {\n  // Your code here\n}`,
		testCases: [
			{
				input: [{ a: 10, b: 50, c: 30, d: 40 }, 2],
				expectedOutput: ["b", "d"],
			},
			{
				input: [{ x: 100, y: 200 }, 1],
				expectedOutput: ["y"],
			},
		],
	},
	{
		id: "js-basics-37",
		number: 37,
		title: "Sort Array of Objects by Name then Age",
		difficulty: "intermediate",
		category: "js-basics",
		description: `Given an array of objects with name and age, sort by name alphabetically, then by age ascending for same names.`,
		examples: [
			{
				input: `[
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Alice", age: 22 }
]`,
				output: `[
  { name: "Alice", age: 22 },
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 }
]`,
			},
		],
		functionName: "sortByNameAge",
		paramNames: ["arr"],
		starterCode: `function sortByNameAge(arr) {\n  // Your code here\n}`,
		testCases: [
			{
				input: [
					[
						{ name: "Alice", age: 30 },
						{ name: "Bob", age: 25 },
						{ name: "Alice", age: 22 },
					],
				],
				expectedOutput: [
					{ name: "Alice", age: 22 },
					{ name: "Alice", age: 30 },
					{ name: "Bob", age: 25 },
				],
			},
		],
	},
	{
		id: "js-basics-38",
		number: 38,
		title: "Reconcile Two Lists",
		difficulty: "intermediate",
		category: "js-basics",
		description: `Given expected and actual arrays, find missing (in expected but not actual) and extra (in actual but not expected) items.`,
		examples: [
			{
				input: `expected: ["a","b","c"], actual: ["b","c","d"]`,
				output: `{ missing: ["a"], extra: ["d"] }`,
			},
		],
		functionName: "reconcile",
		paramNames: ["expected", "actual"],
		starterCode: `function reconcile(expected, actual) {\n  // Your code here\n}`,
		testCases: [
			{
				input: [
					["a", "b", "c"],
					["b", "c", "d"],
				],
				expectedOutput: { missing: ["a"], extra: ["d"] },
			},
			{
				input: [["x"], ["x"]],
				expectedOutput: { missing: [], extra: [] },
			},
		],
	},
	{
		id: "js-basics-39",
		number: 39,
		title: "Merge Two Objects (Override Second)",
		difficulty: "intermediate",
		category: "js-basics",
		description: `Given two objects, merge them where keys from the second object override the first.`,
		examples: [
			{
				input: `{ a: 10, b: 20 }, { a: 5, c: 15 }`,
				output: `{ a: 5, b: 20, c: 15 }`,
			},
		],
		functionName: "mergeObjects",
		paramNames: ["obj1", "obj2"],
		starterCode: `function mergeObjects(obj1, obj2) {\n  // Your code here\n}`,
		testCases: [
			{
				input: [
					{ a: 10, b: 20 },
					{ a: 5, c: 15 },
				],
				expectedOutput: { a: 5, b: 20, c: 15 },
			},
			{
				input: [{}, { x: 1 }],
				expectedOutput: { x: 1 },
			},
		],
	},
];

export const questions = [
	...jsBasicsQuestions,
	...questionsBuiltins,
	...questions01JS,
	...questions01Async,
];

export function getQuestionById(id) {
	return questions.find((q) => q.id === id);
}

export function getQuestionsByDifficulty(difficulty) {
	return questions.filter((q) => q.difficulty === difficulty);
}
