// Primitive Data Types

let name = "Alice";      // String
let age = 25;           // Number
let bigNum = 12345678901234567890n; // BigInt
let isStudent = true;   // Boolean
let city;               // Undefined
let score = null;       // Null
let sym = Symbol('id'); // Symbol


// Non-Primitive Data Types
let person = { 
  name: "Alice",
  age: 25 
 }; // Object

let numbers = [1, 2, 3, 4]; // Array

function greet() {
  console.log("Hello!");
} // Function

// NaN, Infinity, -Infinity are also non-primitive data types

console.log("Hello" / 2); // NaN
console.log(typeof NaN); // "number"

console.log(1 / 0); // Infinity
console.log(typeof Infinity); // "number"

console.log(-1 / 0); // -Infinity
console.log(typeof -Infinity); // "number"


// you can check the type of a variable using the typeof operator

console.log(typeof "Hello");    // "string"
console.log(typeof 42);         // "number"
console.log(typeof 12345678901234567890n); // "bigint"
console.log(typeof true);       // "boolean"
console.log(typeof undefined);  // "undefined"
console.log(typeof null);       // "object" (⚠️ Historical bug in JavaScript)
console.log(typeof Symbol());   // "symbol"
console.log(typeof { name: "Alice" }); // "object"
console.log(typeof [1, 2, 3]);  // "object" (Arrays are special objects)
console.log(typeof function(){}); // "function"
console.log(typeof NaN);        // "number" (⚠️ Historical bug in JavaScript)
console.log(typeof Infinity);   // "number" (⚠️ Historical bug in JavaScript)
console.log(typeof -Infinity);  // "number" (⚠️ Historical bug in JavaScript)










// Mutable vs Immutable Data Types
// Primitive data types are immutable, which means that their values cannot be changed.
// Non-primitive data types are mutable, which means that their values can be changed.

let str = "Hello";
str[0] = "h";
console.log(str); // "Hello"
// The value of str remains the same because strings are immutable.
// If you try to change the value of a string, you will get a TypeError.
// console.log(str[0] = "h"); // TypeError: Cannot assign to read only property

let arr = [1, 2, 3];
arr[0] = 4;
console.log(arr); // [4, 2, 3]
// The value of arr has changed because arrays are mutable.

// Primitive data types are copied by value, while non-primitive data types are copied by reference.
// This means that when you assign a primitive value to a new variable, a copy of the value is created.
// When you assign a non-primitive value to a new variable, a reference to the original value is created.

let x = 5;
let y = x;
y = 10;
console.log(x); // 5
console.log(y); // 10
// The value of x remains the same because it is a primitive data type.

let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2[0] = 4;
console.log(arr1); // [4, 2, 3]
console.log(arr2); // [4, 2, 3]
// The value of arr1 has changed because it is a non-primitive data type.

let obj1 = { name: "Alice" };
let obj2 = obj1;
obj2.name = "Bob";
console.log(obj1.name); // "Bob" (changed, because objects are reference types)







// Data Type Conversion

// Explicit Conversion
// You can explicitly convert a value from one data type to another using the built-in functions provided by JavaScript.

// String Conversion
// You can convert a value to a string using the String() function or the value.toString() method. 
let num = 123;
console.log(String(num)); // "123"

let str1 = "123";
console.log(Number(str)); // 123



// Boolean to Number Conversion
console.log(Number(true));  // 1
console.log(Number(false)); // 0


// Implicit Conversion
// JavaScript automatically converts values from one data type to another when needed.
// This is known as implicit conversion or type coercion.
// For example, when you use the + operator to add a number and a string, JavaScript converts the number to a string and concatenates the two strings.

let x1 = 5;
let y1 = "10";
console.log(x1 + y1); // "510"
// The number 5 is converted to a string and concatenated with the string "10".

// The == operator performs type coercion before comparing two values.
// For example, the following code returns true because the string "5" is converted to the number 5 before comparison. 
console.log("5" == 5); // true

// The === operator does not perform type coercion, so the following code returns false.
console.log("5" === 5); // false 
// The === operator checks for both value and type equality, so the string "5" and the number 5 are considered different types.

// You can use the Boolean() function to convert a value to a boolean.
// The following values are considered false in JavaScript:
// false
// 0
// -0
// 0n
// ""
// null
// undefined
// NaN

// The following values are considered true in JavaScript:
// true
// 1
// -1
// "0"
// "false"
// {}
// []
// function() {}
console.log(Boolean(0)); // false
console.log(Boolean(-0)); // false
console.log(Boolean(0n)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false


console.log(Boolean(true)); // true
console.log(Boolean(1)); // true
console.log(Boolean(-1)); // true
console.log(Boolean("0")); // true
console.log(Boolean("false")); // true
console.log(Boolean({})); // true
console.log(Boolean([])); // true
console.log(Boolean(function(){})); // true
// The values that are considered false are called falsy values, and the values that are considered true are called truthy values.

