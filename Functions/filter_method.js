/*

The filter() method is used to create a new array containing only the elements that meet a certain condition.

The condition is specified by a function that takes one argument and returns a value that is true or false

SYNTAX:
	const newArray = array.filter((element, index, array) => {
		return condition;  // Only elements that return `true` are included
	});

element → The current element being processed
index (optional) → The index of the element
array (optional) → The original array

*/



// EXAMPLE 1 

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNumbers = numbers.filter(num => {
	if (num % 2 === 0) {
		return true;
	} else {
		return false;
	}
});

console.log(evenNumbers);


// OR 

function isEven(num) {
	return num % 2 === 0;
}

evenNumbers = numbers.filter(isEven);

console.log(evenNumbers);




// EXAMPLE 2

let words = ["apple", "banana", "cherry", "fig", "grape"];

let longWords = words.filter(word => {
	if (word.length > 5) {
		return true;
	} else {
		return false;
	}
});

console.log(longWords);

// OR

function isLongWord(word) {
	return word.length > 5;
}

longWords = words.filter(isLongWord);

console.log(longWords);





// EXAMPLE 3

const students = [
	{ name: "Sara", marks: 60 },
	{ name: "Omar", marks: 40 },
	{ name: "Zainab", marks: 90 },
	{ name: "Ali", marks: 85 },
];

let passingStudents = students.filter(student => {
	if (student.marks >= 50) {
		return true;
	} else {
		return false;
	}
});

console.log(passingStudents);

// OR 


function hasPassed(student) {
	return student.marks > 50 ;
}

passingStudents = students.filter(hasPassed);

console.log(passingStudents);




// EXAMPLE 4

const values = [0, "Hello", null, 42, "", undefined, "World"];

let validValues = values.filter(val => {
	if (val) {
		return true;
	} else {
		return false;
	}
});

console.log(validValues);


// OR 

function isValid(val) {
	return val ;
}

validValues = values.filter(isValid);

console.log(validValues);




// EXAMPLE 5
const products = [
	{ name: "Laptop", price: 1500 },
	{ name: "Phone", price: 800 },
	{ name: "Tablet", price: 600 },
	{ name: "Smartwatch", price: 250 }
];

let expensiveProducts = products.filter(product => {
	if (product.price > 700) {
		return true;
	} else {
		return false;
	}
});

console.log(expensiveProducts);

// OR

function isExpensive(product) {
	return product.price > 700;
}

expensiveProducts = products.filter(isExpensive);

console.log(expensiveProducts);

