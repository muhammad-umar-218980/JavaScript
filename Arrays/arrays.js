/*

Arrays in Js 

=> Arrays are used to store multiple values in a single variable.

=> Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.

=> Arrays are dynamic, they can grow and shrink in size.

=> Array elements can be of different types NOT like other languages where all elements should be of the same type.

=> Arrays are mutable, i.e., the elements of an array can be changed.

=> Array elements can be accessed using index.

*/



// 1. Creating an Array

// Method 1: Using Array Literal
let fruits = ['Apple', 'Banana', 'Mango', 'Orange', 'Pineapple'];
console.log(fruits);

console.log(fruits[0]);  // Output: Apple
console.log(fruits[1]);  // Output: Banana
console.log(fruits[5]);  // Output: undefined


console.log(fruits.at(2));
console.log(fruits.at(5));// Output: undefined

let num = 15;

let obj = {
	fullName : "Muhammad Umar" ,
	age : 15
}

let array = [1, 2, 3, 'Hello', true, [1, 2, 3] , num , obj];
console.log(array);

let array2 = [5];
console.log(array2);

// Method 2: Using Array Constructor
/*

Syntax:
let array_name = new Array(element0, element1, ..., elementN);

OR 

let array_name = new Array(arrayLength);

*/
let cars = new Array('BMW', 'Audi', 'Mercedes', 'Toyota', 'Honda');
console.log(cars);

let colors = new Array(5);
console.log(colors); // empty array with length 5



/*

(Using new Array() is not recommended unless specifying size.)

*/