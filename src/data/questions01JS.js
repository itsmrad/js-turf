export const questions01JS = [
	// ==================== EASY ====================
	{
		id: "01-js-anagram",
		number: 53,
		title: "Anagram Checker",
		difficulty: "easy",
		category: "01-js",
		description: `Write a function isAnagram which takes 2 parameters and returns true/false if those are anagrams or not.
What's Anagram? - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.`,
		functionName: "isAnagram",
		paramNames: ["str1", "str2"],
		starterCode: `function isAnagram(str1, str2) {\n  \n}`,
		testCode: `describe('isAnagram', () => {
	test('returns true for anagrams', () => {
		expect(isAnagram('listen', 'silent')).toBe(true);
		expect(isAnagram('rail safety', 'fairy tales')).toBe(true);
		expect(isAnagram('openai', 'aiopen')).toBe(true);
		expect(isAnagram('', '')).toBe(true);
	});
	test('returns false for non-anagrams', () => {
		expect(isAnagram('hello', 'world')).toBe(false);
		expect(isAnagram('openai', 'open')).toBe(false);
		expect(isAnagram('hello', 'lhel')).toBe(false);
		expect(isAnagram('working', 'non')).toBe(false);
	});
	test('returns true for anagrams with different casing', () => {
		expect(isAnagram('Debit Card', 'Bad Credit')).toBe(true);
		expect(isAnagram('School MASTER', 'The ClassROOM')).toBe(true);
	});
	test('returns true for anagrams with special characters', () => {
		expect(isAnagram('abc!', '!bac')).toBe(true);
	});
	test('returns false for non-anagrams with special characters', () => {
		expect(isAnagram('hello', 'hello!')).toBe(false);
		expect(isAnagram('openai!', 'open')).toBe(false);
	});
});`,
	},
	{
		id: "01-js-expenditure",
		number: 54,
		title: "Expenditure Analysis",
		difficulty: "easy",
		category: "01-js",
		description: `Implement a function calculateTotalSpentByCategory which takes a list of transactions as parameter and return a list of objects where each object is unique category-wise and has total price spent as its value.
Transaction - an object like { itemName, category, price, timestamp }.
Output - [{ category: category1, totalSpent: total_amount_spent_on_category1 }, ...]`,
		functionName: "calculateTotalSpentByCategory",
		paramNames: ["transactions"],
		starterCode: `function calculateTotalSpentByCategory(transactions) {\n  return [];\n}`,
		testCode: `describe('calculateTotalSpentByCategory', () => {
    test('returns the correct total spent for a single transaction', () => {
        const transactions = [{ id: 1, timestamp: 1656076800000, price: 10, category: 'Food', itemName: 'Pizza' }];
        expect(calculateTotalSpentByCategory(transactions)).toEqual([{ category: 'Food', totalSpent: 10 }]);
    });
    test('returns the correct total spent for each category', () => {
        const transactions = [
            { id: 1, timestamp: 1656076800000, price: 10, category: 'Food', itemName: 'Pizza' },
            { id: 2, timestamp: 1656259600000, price: 20, category: 'Food', itemName: 'Burger' },
            { id: 3, timestamp: 1656019200000, price: 15, category: 'Clothing', itemName: 'T-Shirt' },
            { id: 4, timestamp: 1656364800000, price: 30, category: 'Electronics', itemName: 'Headphones' },
            { id: 5, timestamp: 1656105600000, price: 25, category: 'Clothing', itemName: 'Jeans' },
        ];
        expect(calculateTotalSpentByCategory(transactions)).toEqual([
            { category: 'Food', totalSpent: 30 },
            { category: 'Clothing', totalSpent: 40 },
            { category: 'Electronics', totalSpent: 30 },
        ]);
    });
    test('returns an empty array when given an empty input', () => {
        expect(calculateTotalSpentByCategory([])).toEqual([]);
    });
    test('returns the correct total spent when multiple transactions have the same category', () => {
        const transactions = [
            { id: 1, timestamp: 1656076800000, price: 10, category: 'Food', itemName: 'Pizza' },
            { id: 2, timestamp: 1656105600000, price: 20, category: 'Food', itemName: 'Burger' },
            { id: 3, timestamp: 1656134400000, price: 30, category: 'Food', itemName: 'Sushi' },
        ];
        expect(calculateTotalSpentByCategory(transactions)).toEqual([{ category: 'Food', totalSpent: 60 }]);
    });
});`,
	},
	{
		id: "01-js-largest",
		number: 55,
		title: "Find Largest Element",
		difficulty: "easy",
		category: "01-js",
		description: `Write a function findLargestElement that takes an array of numbers and returns the largest element.\nExample:\n- Input: [3, 7, 2, 9, 1]\n- Output: 9`,
		functionName: "findLargestElement",
		paramNames: ["numbers"],
		starterCode: `function findLargestElement(numbers) {\n  \n}`,
		testCode: `describe('findLargestElement', () => {
    test('returns the largest element in the array', () => {
        expect(findLargestElement([3, 7, 2, 9, 1])).toBe(9);
        expect(findLargestElement([15, 27, 8, 12])).toBe(27);
        expect(findLargestElement([-5, -10, -2, -8])).toBe(-2);
        expect(findLargestElement([0, 0, 0, 0])).toBe(0);
    });
    test('works with arrays containing negative numbers', () => {
        expect(findLargestElement([-3, -7, -2, -9, -1])).toBe(-1);
        expect(findLargestElement([-15, -27, -8, -12])).toBe(-8);
    });
    test('works with arrays containing decimals', () => {
        expect(findLargestElement([3.5, 7.2, 2.1, 9.8, 1.9])).toBe(9.8);
        expect(findLargestElement([-3.5, -7.2, -2.1, -9.8, -1.9])).toBe(-1.9);
    });
});`,
	},
	// ==================== MEDIUM ====================
	{
		id: "01-js-count-vowels",
		number: 56,
		title: "Count Vowels",
		difficulty: "medium",
		category: "01-js",
		description: `Implement a function countVowels that takes a string as an argument and returns the number of vowels in the string.\nNote: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').`,
		functionName: "countVowels",
		paramNames: ["str"],
		starterCode: `function countVowels(str) {\n  \n}`,
		testCode: `describe('countVowels', () => {
    test('returns the correct count for strings with vowels', () => {
        expect(countVowels('hello')).toBe(2);
        expect(countVowels('programming')).toBe(3);
        expect(countVowels('OpenAI')).toBe(4);
    });
    test('returns 0 for strings without vowels', () => {
        expect(countVowels('rhythm')).toBe(0);
        expect(countVowels('fly')).toBe(0);
    });
    test('returns 0 for an empty string', () => {
        expect(countVowels('')).toBe(0);
    });
    test('handles case-insensitivity correctly', () => {
        expect(countVowels('EaSiEr')).toBe(4);
        expect(countVowels('QUIET')).toBe(3);
        expect(countVowels('aEIOU')).toBe(5);
    });
    test('returns the correct count for strings with spaces', () => {
        expect(countVowels('the quick brown fox')).toBe(5);
        expect(countVowels('a e i o u')).toBe(5);
        expect(countVowels('testing spaces')).toBe(4);
    });
    test('returns the correct count for strings with punctuation marks', () => {
        expect(countVowels('Hello, world!')).toBe(3);
        expect(countVowels('Coding is fun!!!')).toBe(4);
        expect(countVowels('Keep smiling, boo.')).toBe(6);
    });
});`,
	},
	{
		id: "01-js-palindrome",
		number: 57,
		title: "Is Palindrome",
		difficulty: "medium",
		category: "01-js",
		description: `Implement a function isPalindrome which takes a string as argument and returns true/false as its result.\nNote: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.`,
		functionName: "isPalindrome",
		paramNames: ["str"],
		starterCode: `function isPalindrome(str) {\n  return true;\n}`,
		testCode: `describe('isPalindrome', () => {
    test('returns true for palindromes', () => {
        expect(isPalindrome('level')).toBe(true);
        expect(isPalindrome('racecar')).toBe(true);
    });
    test('returns false for non-palindromes', () => {
        expect(isPalindrome('hello')).toBe(false);
        expect(isPalindrome('openai')).toBe(false);
        expect(isPalindrome('abcde')).toBe(false);
    });
    test('returns true for an empty string', () => {
        expect(isPalindrome('')).toBe(true);
    });
    test('handles case-insensitivity correctly', () => {
        expect(isPalindrome('Anna')).toBe(true);
        expect(isPalindrome('aNnA')).toBe(true);
        expect(isPalindrome('Madam')).toBe(true);
        expect(isPalindrome('RaCeCaR')).toBe(true);
    });
    test('returns true for strings with spaces', () => {
        expect(isPalindrome('race car')).toBe(true);
        expect(isPalindrome('A man a plan a canal Panama')).toBe(true);
        expect(isPalindrome('Was it a car or a cat I saw')).toBe(true);
    });
    test('returns true for strings with punctuation marks', () => {
        expect(isPalindrome('Able, was I ere I saw Elba!')).toBe(true);
        expect(isPalindrome('Eva, can I see bees in a cave?')).toBe(true);
        expect(isPalindrome('Mr. Owl ate my metal worm.')).toBe(true);
        expect(isPalindrome('A man, a plan, a canal. Panama')).toBe(true);
    });
});`,
	},
	{
		id: "01-js-times",
		number: 58,
		title: "Calculate Time",
		difficulty: "medium",
		category: "01-js",
		description: `Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.\nTry running it for:\n1. Sum from 1-100\n2. Sum from 1-100000\n3. Sum from 1-1000000000\nHint - use Date class exposed in JS.`,
		functionName: "calculateTime",
		paramNames: ["n"],
		starterCode: `function calculateTime(n) {\n  return 0.01;\n}`,
		testCode: `describe('calculateTime', () => {
    test('returns a number representing seconds', () => {
        const time = calculateTime(100);
        expect(typeof time === 'number').toBe(true);
    });
    test('takes longer for larger numbers', () => {
        const time1 = calculateTime(100);
        const time2 = calculateTime(10000000);
        expect(time2 >= time1).toBe(true);
    });
});`,
	},
	// ==================== HARD ====================
	{
		id: "01-js-calculator",
		number: 59,
		title: "Calculator Class",
		difficulty: "hard",
		category: "01-js",
		description: `Implement a class Calculator having below methods:\n- initialise a result variable in the constructor and keep updating it after every arithmetic operation\n- add: takes a number and adds it to the result\n- subtract: takes a number and subtracts it from the result\n- multiply: takes a number and multiply it to the result\n- divide: takes a number and divide it to the result\n- clear: makes the result variable to 0\n- getResult: returns the value of result variable\n- calculate: takes a string expression which can take multi-arithmetic operations and give its result. Example input: '10 + 2 * (6 - (4 + 1) / 2) + 7'.\nPoints to Note:\n1. The input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly.\n2. The input can have invalid non-numerical characters like '5 + abc', you're supposed to throw error for such inputs.`,
		functionName: "Calculator",
		paramNames: [],
		starterCode: `class Calculator {\n  constructor() {\n    this.result = 0;\n  }\n}`,
		testCode: `describe('Calculator', () => {
    let calc;
    test('addition', () => {
        calc = new Calculator();
        calc.add(5);
        expect(calc.getResult()).toBe(5);
        calc.add(3);
        expect(calc.getResult()).toBe(8);
    });
    test('subtraction', () => {
        calc = new Calculator();
        calc.subtract(5);
        expect(calc.getResult()).toBe(-5);
        calc.subtract(3);
        expect(calc.getResult()).toBe(-8);
    });
    test('multiplication', () => {
        calc = new Calculator();
        calc.add(4);
        calc.multiply(3);
        expect(calc.getResult()).toBe(12);
        calc.multiply(0);
        expect(calc.getResult()).toBe(0);
    });
    test('division', () => {
        calc = new Calculator();
        calc.add(12);
        calc.divide(4);
        expect(calc.getResult()).toBe(3);
        try { calc.divide(0); throw new Error("Expected throw"); } catch(e) {}
    });
    test('clear', () => {
        calc = new Calculator();
        calc.add(5);
        calc.clear();
        expect(calc.getResult()).toBe(0);
    });
    test('calculate complex expression with spaces', () => {
        calc = new Calculator();
        calc.calculate('10 +   2 *    (   6 - (4 + 1) / 2) + 7');
        expect(calc.getResult()).toBe(24);
    });
    test('calculate expression with invalid characters', () => {
        calc = new Calculator();
        let threw = false;
        try { calc.calculate('5 + abc'); } catch(e) { threw = true; }
        expect(threw).toBe(true);
    });
    test('calculate division by zero', () => {
        calc = new Calculator();
        let threw = false;
        try { calc.calculate('10 / 0'); } catch(e) { threw = true; }
        expect(threw).toBe(true);
    });
});`,
	},
	{
		id: "01-js-todo-list",
		number: 60,
		title: "Todo List Class",
		difficulty: "hard",
		category: "01-js",
		description: `Implement a class Todo having below methods:\n- add(todo): adds todo to list of todos\n- remove(indexOfTodo): remove todo from list of todos\n- update(index, updatedTodo): update todo at given index\n- getAll: returns all todos\n- get(indexOfTodo): returns todo at given index\n- clear: deletes all todos`,
		functionName: "Todo",
		paramNames: [],
		starterCode: `class Todo {\n  \n}`,
		testCode: `describe('Todo', () => {
    let todoList;
    test('add and getAll', () => {
        todoList = new Todo();
        todoList.add('Task 1');
        todoList.add('Task 2');
        todoList.add('Task 3');
        expect(todoList.getAll()).toEqual(['Task 1', 'Task 2', 'Task 3']);
    });
    test('remove', () => {
        todoList = new Todo();
        todoList.add('Task 1');
        todoList.add('Task 2');
        todoList.add('Task 3');
        todoList.remove(1);
        expect(todoList.getAll()).toEqual(['Task 1', 'Task 3']);
        todoList.remove(0);
        expect(todoList.getAll()).toEqual(['Task 3']);
        todoList.remove(2);
        expect(todoList.getAll()).toEqual(['Task 3']);
    });
    test('update', () => {
        todoList = new Todo();
        todoList.add('Task 1');
        todoList.add('Task 2');
        todoList.add('Task 3');
        todoList.update(1, 'Updated Task 2');
        expect(todoList.get(1)).toBe('Updated Task 2');
        todoList.update(3, 'Invalid Task');
        expect(todoList.getAll()).toEqual(['Task 1', 'Updated Task 2', 'Task 3']);
    });
    test('get', () => {
        todoList = new Todo();
        todoList.add('Task 1');
        todoList.add('Task 2');
        todoList.add('Task 3');
        expect(todoList.get(0)).toBe('Task 1');
        expect(todoList.get(2)).toBe('Task 3');
        expect(todoList.get(3)).toBeNull();
    });
    test('clear', () => {
        todoList = new Todo();
        todoList.add('Task 1');
        todoList.add('Task 2');
        todoList.add('Task 3');
        todoList.clear();
        expect(todoList.getAll()).toEqual([]);
    });
});`,
	},
];
