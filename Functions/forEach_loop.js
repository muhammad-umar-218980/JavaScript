/*

The forEach loop in JavaScript is used to iterate over an array and execute a function for each element. It is a higher-order function that takes a callback function as an argument.

*/

/*

SYNTAX:

array.forEach(function(element, index, array) {
	Code to execute for each element
});


🔹 Parameters:
element → The current element being processed.
index (Optional) → The index of the current element.
array (Optional) → The original array being looped through.

*/


function printNumber(num) {
	console.log(`Number: ${num}`);
}

let numbers = [1, 2, 3, 4, 5, 6 , 7 , 8 , 9];

numbers.forEach(printNumber); // Only passing the function reference

// OR 
// we can also define function in the loop

numbers.forEach(function printFunc(val){
	console.log(val);
})


// OR 
// we can also use arrow funcs (in majority cases)

numbers.forEach((n) => {
	console.log(n + 9);
})















// EXAMPLE 2
function printDetails(element, index) {
	console.log(`Index ${index}: ${element}`);
}

let colors = ["Red", "Green", "Blue"];

colors.forEach(printDetails);



// EXAMPLE 3

const greet = name => console.log(`Hello, ${name}!`);

let students = ["Ali", "Ayesha", "Ahmed"];

students.forEach(greet);


// EXAMPLE 4

function showInfo(value, index, array) {
	console.log(`Value: ${value}, Index: ${index}, Total Items: ${array.length}`);
}

let items = ["Laptop", "Phone", "Tablet"];

items.forEach(showInfo);
