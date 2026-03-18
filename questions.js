export const questions = [
    // EASY QUESTIONS (10)
    {
        id: 1,
        title: "Technical Module 1",
        text: "Which symbol is used for single-line comments in JavaScript?",
        options: ["//", "/*", "#", "--"],
        correctAnswer: "//",
        difficulty: "easy",
        codingPrompt: "Implement a simple class 'Thread' with a 'run' method that prints 'Running'.",
        expectedOutput: "Running"
    },
    {
        id: 2,
        title: "Technical Module 2",
        text: "How do you declare a JavaScript variable?",
        options: ["var myVar;", "variable myVar;", "v myVar;", "let = myVar;"],
        correctAnswer: "var myVar;",
        difficulty: "easy",
        codingPrompt: "Create a list [10, 20, 30], append 40, and print the list.",
        expectedOutput: "[10, 20, 30, 40]"
    },
    {
        id: 3,
        title: "Technical Module 3",
        text: "Which company developed JavaScript?",
        options: ["Netscape", "Microsoft", "Google", "Apple"],
        correctAnswer: "Netscape",
        difficulty: "easy",
        codingPrompt: "Write a function 'compute' that returns 5*5 and print the result.",
        expectedOutput: "25"
    },
    {
        id: 4,
        title: "Technical Module 4",
        text: "What will '2' + 2 return in JavaScript?",
        options: ["'22'", "4", "22", "Error"],
        correctAnswer: "'22'",
        difficulty: "easy",
        codingPrompt: "Print the first 3 characters of 'HACKATHON'.",
        expectedOutput: "HAC"
    },
    {
        id: 5,
        title: "Technical Module 5",
        text: "Which method adds an element to the end of an array?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        correctAnswer: "push()",
        difficulty: "easy",
        codingPrompt: "Calculate 2 to the power of 8 using ** operator and print.",
        expectedOutput: "256"
    },
    {
        id: 6,
        title: "Technical Module 6",
        text: "How do you write 'Hello World' in an alert box?",
        options: ["alert('Hello World');", "msg('Hello World');", "alertBox('Hello World');", "console.log('Hello World');"],
        correctAnswer: "alert('Hello World');",
        difficulty: "easy",
        codingPrompt: "Create a function that takes 'name' and returns 'Hello ' + name. Call it with 'Admin' and print.",
        expectedOutput: "Hello Admin"
    },
    {
        id: 7,
        title: "Technical Module 7",
        text: "What is the correct way to write a JavaScript array?",
        options: ["var colors = ['red', 'green', 'blue']", "var colors = 'red', 'green', 'blue'", "var colors = (1:'red', 2:'green')", "var colors = {'red', 'green', 'blue'}"],
        correctAnswer: "var colors = ['red', 'green', 'blue']",
        difficulty: "easy",
        codingPrompt: "Print the sum of [1, 5, 10].",
        expectedOutput: "16"
    },
    {
        id: 8,
        title: "Technical Module 8",
        text: "How do you find the length of a string?",
        options: ["string.length", "string.size()", "string.len", "string.length()"],
        correctAnswer: "string.length",
        difficulty: "easy",
        codingPrompt: "Convert 'hello' to uppercase and print.",
        expectedOutput: "HELLO"
    },
    {
        id: 9,
        title: "Technical Module 9",
        text: "Which operator is used for strict equality comparison?",
        options: ["===", "==", "=", "!=="],
        correctAnswer: "===",
        difficulty: "easy",
        codingPrompt: "Check if 'a' in 'apple' and print 'True' if it is.",
        expectedOutput: "True"
    },
    {
        id: 10,
        title: "Technical Module 10",
        text: "What does NaN stand for?",
        options: ["Not a Number", "Null and Null", "Number and Number", "Not a Null"],
        correctAnswer: "Not a Number",
        difficulty: "easy",
        codingPrompt: "Print the type of 123.",
        expectedOutput: "<class 'int'>"
    },
    
    // INTERMEDIATE QUESTIONS (15)
    {
        id: 11,
        title: "Technical Module 11",
        text: "What will be logged: console.log(typeof null);",
        options: ["'object'", "'null'", "'undefined'", "'boolean'"],
        correctAnswer: "'object'",
        difficulty: "intermediate",
        codingPrompt: "Implement a simple class 'Thread' with a 'run' method that prints 'Running'.",
        expectedOutput: "Running"
    },
    {
        id: 12,
        title: "Technical Module 12",
        text: "What is closure in JavaScript?",
        options: ["A function with access to its outer scope", "A way to close the browser", "A type of loop", "An error handling method"],
        correctAnswer: "A function with access to its outer scope",
        difficulty: "intermediate",
        codingPrompt: "Create a list [10, 20, 30], append 40, and print the list.",
        expectedOutput: "[10, 20, 30, 40]"
    },
    {
        id: 13,
        title: "Technical Module 13",
        text: "What will [] == ![] return?",
        options: ["true", "false", "undefined", "Error"],
        correctAnswer: "true",
        difficulty: "intermediate",
        codingPrompt: "Write a function 'compute' that returns 5*5 and print the result.",
        expectedOutput: "25"
    },
    {
        id: 14,
        title: "Technical Module 14",
        text: "Which method creates a new array with all elements that pass a test?",
        options: ["filter()", "map()", "reduce()", "find()"],
        correctAnswer: "filter()",
        difficulty: "intermediate",
        codingPrompt: "Print the first 3 characters of 'HACKATHON'.",
        expectedOutput: "HAC"
    },
    {
        id: 15,
        title: "Technical Module 15",
        text: "What is the output of 0.1 + 0.2 === 0.3?",
        options: ["false", "true", "undefined", "NaN"],
        correctAnswer: "false",
        difficulty: "intermediate",
        codingPrompt: "Calculate 2 to the power of 8 using ** operator and print.",
        expectedOutput: "256"
    },
    {
        id: 16,
        title: "Technical Module 16",
        text: "What does the 'this' keyword refer to in a regular function?",
        options: ["The calling object", "The function itself", "The global object", "It depends"],
        correctAnswer: "The calling object",
        difficulty: "intermediate",
        codingPrompt: "Create a function that takes 'name' and returns 'Hello ' + name. Call it with 'Admin' and print.",
        expectedOutput: "Hello Admin"
    },
    {
        id: 17,
        title: "Technical Module 17",
        text: "Which method removes the last element from an array?",
        options: ["pop()", "push()", "shift()", "unshift()"],
        correctAnswer: "pop()",
        difficulty: "intermediate",
        codingPrompt: "Print the sum of [1, 5, 10].",
        expectedOutput: "16"
    },
    {
        id: 18,
        title: "Technical Module 18",
        text: "What is event bubbling?",
        options: ["Event from child to parent", "Event from parent to child", "Multiple events", "Stopping events"],
        correctAnswer: "Event from child to parent",
        difficulty: "intermediate",
        codingPrompt: "Convert 'hello' to uppercase and print.",
        expectedOutput: "HELLO"
    },
    {
        id: 19,
        title: "Technical Module 19",
        text: "What will console.log(1 + '2' + '2') output?",
        options: ["'122'", "5", "'14'", "Error"],
        correctAnswer: "'122'",
        difficulty: "intermediate",
        codingPrompt: "Check if 'a' in 'apple' and print 'True' if it is.",
        expectedOutput: "True"
    },
    {
        id: 20,
        title: "Technical Module 20",
        text: "Which method is used to parse JSON?",
        options: ["JSON.parse()", "JSON.stringify()", "JSON.parseJSON()", "JSON.toObject()"],
        correctAnswer: "JSON.parse()",
        difficulty: "intermediate",
        codingPrompt: "Print the type of 123.",
        expectedOutput: "<class 'int'>"
    },
    {
        id: 21,
        title: "Technical Module 21",
        text: "What is the difference between let and var?",
        options: ["let is block-scoped, var is function-scoped", "let is function-scoped, var is block-scoped", "They are the same", "let is older"],
        correctAnswer: "let is block-scoped, var is function-scoped",
        difficulty: "intermediate",
        codingPrompt: "Implement a simple class 'Thread' with a 'run' method that prints 'Running'.",
        expectedOutput: "Running"
    },
    {
        id: 22,
        title: "Technical Module 22",
        text: "What will console.log(typeof NaN) return?",
        options: ["'number'", "'NaN'", "'undefined'", "'object'"],
        correctAnswer: "'number'",
        difficulty: "intermediate",
        codingPrompt: "Create a list [10, 20, 30], append 40, and print the list.",
        expectedOutput: "[10, 20, 30, 40]"
    },
    {
        id: 23,
        title: "Technical Module 23",
        text: "What is a promise in JavaScript?",
        options: ["Object for async operations", "A coffee maker", "A callback type", "Sync operation"],
        correctAnswer: "Object for async operations",
        difficulty: "intermediate",
        codingPrompt: "Write a function 'compute' that returns 5*5 and print the result.",
        expectedOutput: "25"
    },
    {
        id: 24,
        title: "Technical Module 24",
        text: "What will Boolean('false') return?",
        options: ["true", "false", "undefined", "null"],
        correctAnswer: "true",
        difficulty: "intermediate",
        codingPrompt: "Print the first 3 characters of 'HACKATHON'.",
        expectedOutput: "HAC"
    },
    {
        id: 25,
        title: "Technical Module 25",
        text: "Which operator returns the remainder?",
        options: ["%", "/", "//", "%%"],
        correctAnswer: "%",
        difficulty: "intermediate",
        codingPrompt: "Calculate 2 to the power of 8 using ** operator and print.",
        expectedOutput: "256"
    },
    
    // HARD QUESTIONS (5)
    {
        id: 26,
        title: "Technical Module 26",
        text: "What will be the output: (function(x) { return x * 2; })((function(y) { return y * 3; })(5));",
        options: ["30", "15", "10", "25"],
        correctAnswer: "30",
        difficulty: "hard",
        codingPrompt: "Create a function that takes 'name' and returns 'Hello ' + name. Call it with 'Admin' and print.",
        expectedOutput: "Hello Admin"
    },
    {
        id: 27,
        title: "Technical Module 27",
        text: "What will console.log(1 < 2 < 3) and console.log(3 > 2 > 1) output?",
        options: ["true, false", "true, true", "false, false", "false, true"],
        correctAnswer: "true, false",
        difficulty: "hard",
        codingPrompt: "Print the sum of [1, 5, 10].",
        expectedOutput: "16"
    },
    {
        id: 28,
        title: "Technical Module 28",
        text: "What will be the output: [1, 2, 3].map(parseInt);",
        options: ["[1, NaN, NaN]", "[1, 2, 3]", "[NaN, 2, 3]", "[1, 2, NaN]"],
        correctAnswer: "[1, NaN, NaN]",
        difficulty: "hard",
        codingPrompt: "Convert 'hello' to uppercase and print.",
        expectedOutput: "HELLO"
    },
    {
        id: 29,
        title: "Technical Module 29",
        text: "What will console.log([] + []) output?",
        options: ["'' (empty string)", "[]", "0", "undefined"],
        correctAnswer: "'' (empty string)",
        difficulty: "hard",
        codingPrompt: "Check if 'a' in 'apple' and print 'True' if it is.",
        expectedOutput: "True"
    },
    {
        id: 30,
        title: "Technical Module 30",
        text: "What will be the output: for (var i = 0; i < 3; i++) { setTimeout(function() { console.log(i); }, 100); }",
        options: ["3, 3, 3", "0, 1, 2", "undefined", "1, 2, 3"],
        correctAnswer: "3, 3, 3",
        difficulty: "hard",
        codingPrompt: "Print the type of 123.",
        expectedOutput: "<class 'int'>"
    }
];