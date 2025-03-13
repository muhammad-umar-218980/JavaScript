/*

concat() method is used to merge two or more arrays. 

This method does not change the existing arrays, but instead returns a new array.

Syntax:
let newArray = array1.concat(array2, array3, ... , arrayN);


*/

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

let newArray = array1.concat(array2);
console.log(newArray); // Output: [1, 2, 3, 4, 5, 6]

let arr1 = ['a', 'b', 'c'];
let arr2 = ['d', 'e', 'f'];

console.log(arr1.concat(arr2)); // Output: ['a', 'b', 'c', 'd', 'e', 'f']

arr1 = ['a', 'b', 'c'];
arr2 = ['d', 'e', 'f'];
let arr3 = ['g', 'h', 'i'];

let mergedArray = arr1.concat(arr2, arr3);
console.log(mergedArray); // Output: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']



// we can also use concat() method to merge an array with other values like strings, numbers, etc.

let obj ={
	name : "Muhammad Umar",
	age : 18
}

let arr = [1, 2, 3];
newArray = arr.concat(4, 5, 6 , [7, 8, 9], 'Hello',obj);

console.log(newArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 'Hello', { name: 'Muhammad Umar', age: 18 }]