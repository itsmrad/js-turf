export const questionsBuiltins = [
	// ==================== EASY (1-5) ====================
	{
		id: "js-built-ins-1",
		number: 40,
		title: "Reverse a String",
		difficulty: "easy",
		category: "js-built-ins",
		description: `Write a function \`reverseString\` which takes a string as input and returns the reversed version of the string.

Reversing a string means rearranging its characters in the opposite order.`,
		examples: [
			{ input: `"hello"`, output: `"olleh"` },
			{ input: `""`, output: `""` },
		],
		functionName: "reverseString",
		paramNames: ["str"],
		starterCode: `function reverseString(str) {\n  // Your code here\n}`,
		testCode: `describe('String reversal function', () => {
    test('should reverse a regular string', () => {
        expect(reverseString('hello')).toBe('olleh');
    });
    test('should reverse a string with spaces', () => {
        expect(reverseString('hello world')).toBe('dlrow olleh');
    });
    test('should return the same string for a single character', () => {
        expect(reverseString('a')).toBe('a');
    });
    test('should return an empty string if input is empty', () => {
        expect(reverseString('')).toBe('');
    });
});`,
	},
	{
		id: "js-built-ins-2",
		number: 41,
		title: "Count Vowels in a String",
		difficulty: "easy",
		category: "js-built-ins",
		description: `Write a function \`countVowels\` which takes a string as input and returns the count of vowels (both uppercase and lowercase) in the string.

Vowels are the characters: a, e, i, o, u (case-insensitive).`,
		examples: [
			{ input: `"hello world"`, output: `3` },
			{ input: `"xyz"`, output: `0` },
		],
		functionName: "countVowels",
		paramNames: ["str"],
		starterCode: `function countVowels(str) {\n  // Your code here\n}`,
		testCode: `describe('Count Vowels in a String', () => {
    test('should return 3 vowels for "Hello World"', () => {
        expect(countVowels('Hello World')).toBe(3);
    });
    test('should return 7 vowels for "This is a test sentence"', () => {
        expect(countVowels('This is a test sentence')).toBe(7);
    });
    test('should return 0 vowels for an empty string', () => {
        expect(countVowels('')).toBe(0);
    });
    test('should return 5 vowels for "Beautiful"', () => {
        expect(countVowels('Beautiful')).toBe(5);
    });
    test('should return 3 vowels for "Programming"', () => {
        expect(countVowels('Programming')).toBe(3);
    });
});`,
	},
	{
		id: "js-built-ins-3",
		number: 42,
		title: "Count Occurrences in Array",
		difficulty: "easy",
		category: "js-built-ins",
		description: `Write a function \`countOccurrences\` which takes an array as input and returns an object representing the frequency of each element in the array.

The frequency of an element is the number of times it appears in the array.`,
		examples: [
			{ input: `[10, 20, 10, 30, 20, 20]`, output: `{ 10: 2, 20: 3, 30: 1 }` },
			{ input: `[]`, output: `{}` },
		],
		functionName: "countOccurrences",
		paramNames: ["arr"],
		starterCode: `function countOccurrences(arr) {\n  // Your code here\n}`,
		testCode: `describe('countOccurrences', () => {
    test('should return correct counts of each element in the array', () => {
        const arr = [10, 20, 30, 10, 40];
        expect(countOccurrences(arr)).toEqual({ 10: 2, 20: 1, 30: 1, 40: 1 });
    });
    test('should handle empty array', () => {
        const arr = [];
        expect(countOccurrences(arr)).toEqual({});
    });
    test('should work with all duplicate elements', () => {
        const arr = [5, 5, 5, 5];
        expect(countOccurrences(arr)).toEqual({ 5: 4 });
    });
});`,
	},
	{
		id: "js-built-ins-4",
		number: 43,
		title: "Count Characters in a String",
		difficulty: "easy",
		category: "js-built-ins",
		description: `Write a function \`countCharacters\` which takes a string as input and returns an object representing the frequency of each character in the string.

The function should count all characters, including spaces and special characters, and handle empty strings gracefully.`,
		examples: [
			{ input: `"hello"`, output: `{ h: 1, e: 1, l: 2, o: 1 }` },
			{ input: `""`, output: `{}` },
		],
		functionName: "countCharacters",
		paramNames: ["str"],
		starterCode: `function countCharacters(str) {\n  // Your code here\n}`,
		testCode: `describe('Character counting function', () => {
    test('should count the occurrences of each character', () => {
        expect(countCharacters("hello")).toEqual({ h: 1, e: 1, l: 2, o: 1 });
    });
    test('should handle a string with multiple repeated characters', () => {
        expect(countCharacters("aaaabbbcccc")).toEqual({ a: 4, b: 3, c: 4 });
    });
    test('should count unique characters in a string', () => {
        expect(countCharacters("abcdef")).toEqual({ a: 1, b: 1, c: 1, d: 1, e: 1, f: 1 });
    });
    test('should count characters in a string with one type of character', () => {
        expect(countCharacters("aaa")).toEqual({ a: 3 });
    });
    test('should return an empty object for an empty string', () => {
        expect(countCharacters("")).toEqual({});
    });
});`,
	},
	{
		id: "js-built-ins-5",
		number: 44,
		title: "Fibonacci Sequence",
		difficulty: "easy",
		category: "js-built-ins",
		description: `Write two functions to generate the Fibonacci sequence:

1. \`fibonacci\` (Iterative) — Takes an integer \`n\` and returns an array containing the first \`n\` numbers in the Fibonacci sequence.
2. \`fibonacciRecursive\` (Recursive) — Takes an integer \`n\` and returns the \`n\`-th Fibonacci number using recursion.

The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the two preceding numbers.`,
		examples: [
			{
				input: `10`,
				output: `Iterative: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34] — Recursive: 55`,
			},
		],
		functionName: "fibonacci",
		paramNames: ["n"],
		starterCode: `// Iterative Fibonacci function\nfunction fibonacci(n) {\n  // Your code here\n}\n\n// Recursive Fibonacci function\nfunction fibonacciRecursive(n) {\n  // Your code here\n}`,
		testCode: `describe('Fibonacci function', () => {
    test('should return the first 10 Fibonacci numbers using the iterative approach', () => {
        expect(fibonacci(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
    });
    test('should return the first 5 Fibonacci numbers using the iterative approach', () => {
        expect(fibonacci(5)).toEqual([0, 1, 1, 2, 3]);
    });
    test('should return the first 10 Fibonacci numbers using the recursive approach', () => {
        expect(fibonacciRecursive(10)).toBe(55);
    });
    test('should return the 5th Fibonacci number using the recursive approach', () => {
        expect(fibonacciRecursive(5)).toBe(5);
    });
    test('should return 0 for the 0th Fibonacci number using the recursive approach', () => {
        expect(fibonacciRecursive(0)).toBe(0);
    });
    test('should return 1 for the 1st Fibonacci number using the recursive approach', () => {
        expect(fibonacciRecursive(1)).toBe(1);
    });
});`,
	},

	// ==================== MEDIUM (6-11) ====================
	{
		id: "js-built-ins-6",
		number: 45,
		title: "Find Duplicates in Array",
		difficulty: "medium",
		category: "js-built-ins",
		description: `Write a function \`findDuplicates\` which takes an array as input and returns an array containing all the duplicate elements.

Elements that appear more than once in the array are considered duplicates.`,
		examples: [
			{ input: `[10, 20, 30, 10, 40]`, output: `[10]` },
			{ input: `[1, 2, 3, 4, 5]`, output: `[]` },
		],
		functionName: "findDuplicates",
		paramNames: ["arr"],
		starterCode: `function findDuplicates(arr) {\n  // Your code here\n}`,
		testCode: `describe('findDuplicates', () => {
    test('should return duplicate elements in the array', () => {
        const arr = [10, 20, 30, 10, 40];
        expect(findDuplicates(arr)).toEqual([10]);
    });
    test('should return empty array when there are no duplicates', () => {
        const arr = [1, 2, 3, 4, 5];
        expect(findDuplicates(arr)).toEqual([]);
    });
    test('should handle empty array', () => {
        const arr = [];
        expect(findDuplicates(arr)).toEqual([]);
    });
});`,
	},
	{
		id: "js-built-ins-7",
		number: 46,
		title: "First Non-Repeating Character",
		difficulty: "medium",
		category: "js-built-ins",
		description: `Write a function \`nonrepeat\` which takes a string as input and returns the first non-repeating character in the string.

A non-repeating character is a character that appears only once in the entire string. Return \`null\` if no such character exists.`,
		examples: [
			{ input: `"abcab"`, output: `"c"` },
			{ input: `"aabbcc"`, output: `null` },
		],
		functionName: "nonrepeat",
		paramNames: ["str"],
		starterCode: `function nonrepeat(str) {\n  // Your code here\n}`,
		testCode: `describe('nonrepeat', () => {
    test('should return the first non-repeating character', () => {
        expect(nonrepeat('abcab')).toBe('c');
    });
    test('should return the first non-repeating character when it is at the end', () => {
        expect(nonrepeat('aabbc')).toBe('c');
    });
    test('should return null if all characters are repeating', () => {
        expect(nonrepeat('aabb')).toBeNull();
    });
    test('should return the first character if all characters are unique', () => {
        expect(nonrepeat('abcdef')).toBe('a');
    });
    test('should return null for an empty string', () => {
        expect(nonrepeat('')).toBeNull();
    });
    test('should handle a single character string', () => {
        expect(nonrepeat('z')).toBe('z');
    });
    test('should handle strings with spaces and special characters', () => {
        expect(nonrepeat('a b a')).toBe('b');
    });
});`,
	},
	{
		id: "js-built-ins-8",
		number: 47,
		title: "Reverse an Integer",
		difficulty: "medium",
		category: "js-built-ins",
		description: `Write a function \`reverseInteger\` which takes an integer as input and returns the integer with its digits reversed. If the input is negative, the reversed integer should also be negative.`,
		examples: [
			{ input: `123`, output: `321` },
			{ input: `-456`, output: `-654` },
			{ input: `100`, output: `1` },
		],
		functionName: "reverseInteger",
		paramNames: ["num"],
		starterCode: `function reverseInteger(num) {\n  // Your code here\n}`,
		testCode: `describe('reverseInteger', () => {
    test('should reverse a positive integer', () => {
        expect(reverseInteger(12345)).toBe(54321);
    });
    test('should reverse a negative integer', () => {
        expect(reverseInteger(-9876)).toBe(-6789);
    });
    test('should handle integers ending with zeros', () => {
        expect(reverseInteger(1200)).toBe(21);
    });
    test('should handle zero correctly', () => {
        expect(reverseInteger(0)).toBe(0);
    });
    test('should handle single-digit numbers', () => {
        expect(reverseInteger(5)).toBe(5);
        expect(reverseInteger(-3)).toBe(-3);
    });
});`,
	},
	{
		id: "js-built-ins-9",
		number: 48,
		title: "String Compression",
		difficulty: "medium",
		category: "js-built-ins",
		description: `Write a function \`compression\` which takes a string as input and returns a compressed version of the string. The compression is done by replacing consecutive repeating characters with the character followed by the count of repetitions. If a character does not repeat consecutively, it is not followed by a count.`,
		examples: [
			{ input: `"aaabbbbcccvvmm"`, output: `"a3b4c3v2m2"` },
			{ input: `"abc"`, output: `"abc"` },
		],
		functionName: "compression",
		paramNames: ["str"],
		starterCode: `function compression(str) {\n  // Your code here\n}`,
		testCode: `describe('String compression', () => {
    test('should compress consecutive characters with counts', () => {
        expect(compression("aaabbbbcccvvmm")).toBe("a3b4c3v2m2");
    });
    test('should return the same string if no characters are repeated', () => {
        expect(compression("abcd")).toBe("abcd");
    });
    test('should handle a single character string', () => {
        expect(compression("a")).toBe("a");
    });
    test('should handle an empty string', () => {
        expect(compression("")).toBe("");
    });
    test('should compress partial repetitions', () => {
        expect(compression("aaabbcc")).toBe("a3b2c2");
    });
    test('should handle strings with mixed characters', () => {
        expect(compression("aaAAa")).toBe("a2A2a");
    });
});`,
	},
	{
		id: "js-built-ins-10",
		number: 49,
		title: "Is Perfect Number",
		difficulty: "medium",
		category: "js-built-ins",
		description: `Write a function \`isPerfectNumber\` which takes an integer \`num\` as input and returns a boolean indicating whether the number is a perfect number.

A perfect number is a positive integer that is equal to the sum of its proper divisors, excluding the number itself. For example, 6 is a perfect number because 1 + 2 + 3 = 6.`,
		examples: [
			{ input: `6`, output: `true` },
			{ input: `28`, output: `true` },
			{ input: `10`, output: `false` },
		],
		functionName: "isPerfectNumber",
		paramNames: ["num"],
		starterCode: `function isPerfectNumber(num) {\n  // Your code here\n}`,
		testCode: `describe('Perfect Number Checker', () => {
    test('should return true for 6 (Perfect Number)', () => {
        expect(isPerfectNumber(6)).toBe(true);
    });
    test('should return true for 28 (Perfect Number)', () => {
        expect(isPerfectNumber(28)).toBe(true);
    });
    test('should return false for 12 (Not a Perfect Number)', () => {
        expect(isPerfectNumber(12)).toBe(false);
    });
    test('should return false for 1 (Not a Perfect Number)', () => {
        expect(isPerfectNumber(1)).toBe(false);
    });
    test('should return false for 15 (Not a Perfect Number)', () => {
        expect(isPerfectNumber(15)).toBe(false);
    });
});`,
	},
	{
		id: "js-built-ins-11",
		number: 50,
		title: "Primes Up To 100",
		difficulty: "medium",
		category: "js-built-ins",
		description: `Write a function \`getPrimesUpTo100\` which returns an array of all prime numbers up to 100.

A prime number is a number greater than 1 that has no divisors other than 1 and itself.`,
		examples: [
			{
				input: `(no input)`,
				output: `[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]`,
			},
		],
		functionName: "getPrimesUpTo100",
		paramNames: [],
		starterCode: `function getPrimesUpTo100() {\n  // Your code here\n}`,
		testCode: `describe('Prime numbers between 1 and 100', () => {
    test('should return the correct prime numbers between 1 and 100', () => {
        const primes = getPrimesUpTo100();
        expect(primes).toEqual([
            2, 3, 5, 7, 11, 13, 17, 19, 23, 29,
            31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
            73, 79, 83, 89, 97
        ]);
    });
    test('should return an array of primes with length 25', () => {
        const primes = getPrimesUpTo100();
        expect(primes.length).toBe(25);
    });
    test('should not include any non-prime numbers', () => {
        const primes = getPrimesUpTo100();
        const nonPrimes = [4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20, 21, 22, 24, 25, 26, 27, 28, 30, 32, 33, 34, 35, 36, 38, 39, 40, 42, 44, 45, 46, 48, 49, 50, 51, 52, 54, 55, 56, 57, 58, 60, 62, 63, 64, 65, 66, 68, 69, 70, 72, 74, 75, 76, 77, 78, 80, 81, 82, 84, 85, 86, 87, 88, 90, 91, 92, 93, 94, 95, 96, 98, 99, 100];
        nonPrimes.forEach(num => {
            expect(primes).not.toContain(num);
        });
    });
});`,
	},

	// ==================== HARD (12-13) ====================
	{
		id: "js-built-ins-12",
		number: 51,
		title: "Unique Elements from Array",
		difficulty: "hard",
		category: "js-built-ins",
		description: `Write a function \`getUniqueElements\` which takes an array as input and returns a new array containing only the unique elements from the input array (first occurrence of each element in case of duplicates).`,
		examples: [
			{ input: `[10, 20, 30, 10, 40, 20]`, output: `[10, 20, 30, 40]` },
			{ input: `[]`, output: `[]` },
		],
		functionName: "getUniqueElements",
		paramNames: ["arr"],
		starterCode: `function getUniqueElements(arr) {\n  // Your code here\n}`,
		testCode: `describe('getUniqueElements', () => {
    test('should return unique elements from an array with duplicates', () => {
        const arr = [10, 20, 30, 10, 40];
        expect(getUniqueElements(arr)).toEqual([10, 20, 30, 40]);
    });
    test('should return the same array if all elements are unique', () => {
        const arr = [1, 2, 3, 4, 5];
        expect(getUniqueElements(arr)).toEqual([1, 2, 3, 4, 5]);
    });
    test('should return a single element array if all elements are the same', () => {
        const arr = [5, 5, 5, 5];
        expect(getUniqueElements(arr)).toEqual([5]);
    });
    test('should return an empty array if input is empty', () => {
        const arr = [];
        expect(getUniqueElements(arr)).toEqual([]);
    });
    test('should handle arrays with different data types', () => {
        const arr = [1, '1', 1, 2, '2', '2'];
        expect(getUniqueElements(arr)).toEqual([1, '1', 2, '2']);
    });
});`,
	},
	{
		id: "js-built-ins-13",
		number: 52,
		title: "Word Compression",
		difficulty: "hard",
		category: "js-built-ins",
		description: `Write a function \`compressWords\` which takes an array of strings as input and returns a new array with consecutive duplicate elements compressed. If an element appears consecutively, it is replaced by the element followed by the count of its occurrences.`,
		examples: [
			{
				input: `["apple", "apple", "banana", "banana", "banana", "cherry", "apple", "apple"]`,
				output: `["apple2", "banana3", "cherry", "apple2"]`,
			},
			{ input: `[]`, output: `[]` },
		],
		functionName: "compressWords",
		paramNames: ["arr"],
		starterCode: `function compressWords(arr) {\n  // Your code here\n}`,
		testCode: `describe('Word compression', () => {
    test('should compress consecutive identical words', () => {
        expect(compressWords(["apple", "apple", "banana", "banana", "banana", "cherry", "apple", "apple"])).toEqual(["apple2", "banana3", "cherry", "apple2"]);
    });
    test('should return the same array if no words are repeated', () => {
        expect(compressWords(["apple", "banana", "cherry"])).toEqual(["apple", "banana", "cherry"]);
    });
    test('should handle an array with a single word', () => {
        expect(compressWords(["apple"])).toEqual(["apple"]);
    });
    test('should handle an empty array', () => {
        expect(compressWords([])).toEqual([]);
    });
    test('should compress an array with all identical words', () => {
        expect(compressWords(["apple", "apple", "apple"])).toEqual(["apple3"]);
    });
});`,
	},
];
