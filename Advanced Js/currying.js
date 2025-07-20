// Currying in JavaScript - Full Examples with Explanations

// Example 1: Basic Curry Function
// This function adds three numbers. It takes one argument at a time and returns the next function.
console.log("--- Example 1: Basic Currying ---");

function add(a) {
	return function (b) {
		return function (c) {
			return a + b + c;
		};
	};
}

console.log(add(1)(2)(3)); // 6

// Explanation:
// - `add(1)` returns a function expecting `b`.
// - That returns a function expecting `c`.
// - Finally, it adds `a + b + c`.


// Example 2: Curried Function for Greeting
// A real-world style example where you can create personalized greeting messages using currying.
console.log("\n--- Example 2: Greeting Generator ---");

function greet(greeting) {
	return function (name) {
		return `${greeting}, ${name}!`;
	};
}

const sayHello = greet("Hello");
const sayHi = greet("Hi");

console.log(sayHello("Umar")); // Hello, Umar!
console.log(sayHi("Ali"));     // Hi, Ali!

// Explanation:
// - `greet("Hello")` returns a function that can greet anyone with "Hello".
// - Helps in reusability and clean API design.


// Example 3: Currying with Arrow Functions
// This example shows a short syntax for currying using arrow functions.
console.log("\n--- Example 3: Currying with Arrow Functions ---");

const multiply = a => b => c => a * b * c;

console.log(multiply(2)(3)(4)); // 24

// Explanation:
// - Each arrow function returns the next, forming a chain.
// - Useful for writing compact logic pipelines.


// Example 4: Manual Currying for Any Function
// This shows how to write a reusable `curry` function that can convert any function into its curried form.
console.log("\n--- Example 4: Manual Curry Utility Function ---");

function normalAdd(a, b, c) {
	return a + b + c;
}

function curry(fn) {
	return function curried(...args) {
		if (args.length >= fn.length) {
			return fn(...args);
		} else {
			return function (...next) {
				return curried(...args, ...next);
			};
		}
	};
}

const curriedAdd = curry(normalAdd);

console.log(curriedAdd(1)(2)(3)); // 6
console.log(curriedAdd(1, 2)(3)); // 6
console.log(curriedAdd(1)(2, 3)); // 6

// Explanation:
// - `curry(fn)` checks if all arguments are provided.
// - If not, it returns a new function expecting the rest.
// - This allows partial application and flexibility.


// Example 5: Practical Use in React/Events/DOM
// Currying is helpful when creating handlers with specific behaviors.
console.log("\n--- Example 5: Simulating Event Handling ---");

function handleEvent(eventType) {
	return function (elementId) {
		return function () {
			console.log(`Handled ${eventType} for element ${elementId}`);
		};
	};
}

const clickHandler = handleEvent("click")("button1");
const hoverHandler = handleEvent("hover")("image1");

clickHandler(); // Handled click for element button1
hoverHandler(); // Handled hover for element image1

// Explanation:
// - Currying allows event handler generation specific to event and element.
// - Makes code modular and readable.

