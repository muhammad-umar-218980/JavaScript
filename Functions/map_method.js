/*

The map() method in JavaScript creates a new array by applying a function to each element of an existing array. It does not modify the original array.

=> Works like for each but returns a new array by applying a function to each element of an existing array.

SYNTAX :
	const newArray = array.map((element, index, array) => {
	code to be executed for each element and return transformed element
});


element → The current array element
index (optional) → The index of the element
array (optional) → The original array


*/

function printNumber(num) {
	let str = `Number: ${num}`;
	return str;
}

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let result = numbers.map(printNumber);

console.log(result);
console.log(`Real Array : ` , numbers);// unchanged


// OR 
// we can also define function in the method


result = numbers.map(function printFunc(val){
	//console.log(val); wrong because we always have to return values
	return val*4;
})

console.log(result);

// OR 
// we can also use arrow funcs (in majority cases)

result = numbers.map((n) => {
	return (n + 9);
})

console.log(result);





// EXAMPLE 2

function printDetails(element, index) {
	return (`Index ${index}: ${element}`);
}

let colors = ["Red", "Green", "Blue"];

let newArray = colors.map(printDetails);

console.log(newArray)




// EXAMPLE 3

const greet = name => (`Hello, ${name}!`);

let students = ["Ali", "Ayesha", "Ahmed"];

newArray = students.map(greet);
console.log(newArray);




let items = ["Laptop", "Phone", "Tablet"];

let infoArray = items.map((value, index, array) => 
	`Value: ${value}, Index: ${index}, Total Items: ${array.length}`
);

console.log(infoArray);

