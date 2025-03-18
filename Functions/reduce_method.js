/*

The reduce() method in JavaScript is used to reduce an array to a single value by applying a function to each element and accumulating the result.


SYNTAX:
	array.reduce(function(accumulator, currentValue, index, array) {
	
	Perform operation and return updated accumulator

}, initialValue);


✅ Parameters:
accumulator → Stores the accumulated result.
currentValue → The current element being processed.
index (Optional) → The index of the current element.
array (Optional) → The original array.
initialValue (Optional but recommended) → The starting value for the accumulator.


*/



// EXAMPLE 1: Sum of all numbers in an array

const numbers = [1, 2, 3, 4, 5];

let sum = numbers.reduce((acc, num) => {
	return acc + num;
}, 0);

console.log(sum); // Output: 15

// OR

function add(acc, num) {
	return acc + num;
}

sum = numbers.reduce(add, 0);

console.log(sum); // Output: 15




// EXAMPLE 2

const values = [3, 9, 1, 6, 12, 8];

let max = values.reduce((acc, num) => {
	return num > acc ? num : acc;
}, values[0]);

console.log(max); // Output: 12

// OR

function findMax(acc, num) {
	return num > acc ? num : acc;
}

max = values.reduce(findMax, values[0]);

console.log(max); // Output: 12
