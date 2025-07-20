// Example 1: Basic Closure
// This example demonstrates a simple closure. 
// The inner function can access a variable from its outer function even after the outer function has completed.
console.log("--- Example 1: Basic Closure ---");

function outerFunction() {
	const outerVariable = 'I am from the outside!';
	function innerFunction() {
		console.log(outerVariable);
	}
	return innerFunction;
}

const myClosure = outerFunction();
myClosure();

// In this case, `innerFunction` remembers and accesses `outerVariable` even though `outerFunction` has finished running.


// Example 2: Counter with Closure
// This example shows how closures can be used to maintain private state across function calls.
console.log("\n--- Example 2: Counter with Closure ---");

function makeCounter() {
	let count = 0;
	return function () {
		count++;
		console.log(count);
	};
}

let Counter = makeCounter();
Counter();
Counter();

// Each call to `Counter()` increases and logs the preserved `count` value. The variable `count` remains private inside the closure.


// Example 3: Function Factory
// This demonstrates how closures can be used to generate customized functions using a factory pattern.
console.log("\n--- Example 3: Function Factory ---");

function makeAdder(x) {
	return function (y) {
		return x + y;
	};
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(`add5(2) is: ${add5(2)}`);
console.log(`add10(2) is: ${add10(2)}`);
console.log(`add5(10) is: ${add5(10)}`);

// Each created function "closes over" its own `x` value, making `add5` and `add10` act independently with their captured values.


// Example 4: Data Privacy Using IIFE
// This example uses an Immediately Invoked Function Expression (IIFE) to encapsulate private variables and expose a public API.
console.log("\n--- Example 4: Data Privacy (Module Pattern) ---");

const counter = (function () {
	let _privateCounter = 0;

	function _changeBy(val) {
		_privateCounter += val;
	}

	return {
		increment: function () {
			_changeBy(1);
		},
		decrement: function () {
			_changeBy(-1);
		},
		value: function () {
			return _privateCounter;
		}
	};
})();

console.log(`Initial counter value: ${counter.value()}`);
counter.increment();
counter.increment();
console.log(`Counter value after two increments: ${counter.value()}`);
counter.decrement();
console.log(`Counter value after one decrement: ${counter.value()}`);
console.log(counter._privateCounter); // This will be undefined

// The variable `_privateCounter` is not accessible directly from outside, ensuring data privacy through closure scope.


// Example 5: Closures in Loops - Common Pitfall and Fix
// This example demonstrates a common mistake with closures inside loops using `var` and the correct way using `let`.
console.log("\n--- Example 5: Closures in Loops ---");

console.log("Problem with 'var' in a loop:");
for (var i = 1; i <= 3; i++) {
	setTimeout(function timer() {
		console.log(`This is the problem: i is ${i}`);
	}, i * 1000);
}

// Wait a few seconds to clearly see the previous output before showing the fix
setTimeout(() => {
	console.log("\nSolution with 'let' in a loop:");
	for (let j = 1; j <= 3; j++) {
		setTimeout(function timer() {
			console.log(`This is the solution: j is ${j}`);
		}, j * 1000);
	}
}, 4000);

// When using `var`, the loop variable is not block-scoped, so all callbacks use the final value.
// With `let`, a new binding is created in each iteration, preserving the correct value inside the closure.
