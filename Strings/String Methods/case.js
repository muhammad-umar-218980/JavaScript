/*

JavaScript provides methods to change the case of a string:

toUpperCase(): Converts all letters to uppercase.
toLowerCase(): Converts all letters to lowercase.

=> Both methods return a new string, leaving the original string unchanged because strings are immutable.

*/

let fullName = "Muhammad Umar";

let upperFullName = fullName.toUpperCase();
let lowerFullName = fullName.toLowerCase();

console.log("Original:", fullName);  
console.log("Uppercase :", upperFullName);
console.log("Lowercase :", lowerFullName);

console.log("Uppercase :", fullName.toUpperCase());
console.log("Lowercase :", fullName.toLowerCase(), "\n\n");

// we can also modify the original string by reassigning the value
console.log("Original:", fullName);  

// Changing the original string to uppercase
fullName = fullName.toUpperCase();
console.log("After Uppercase:", fullName);  

// Changing the original string to lowercase
fullName = fullName.toLowerCase();
console.log("After Lowercase:", fullName);