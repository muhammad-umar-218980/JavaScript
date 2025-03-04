// Arithmetic operators

let a = 10, b = 3;
console.log(a + b);  // 13
console.log(a - b);  // 7
console.log(a * b);  // 30
console.log(a / b);  // 3.333
console.log(a % b);  // 1
console.log(a ** b); // 1000     --> 10^3 exponentiation

let x = 5;
console.log(++x); // 6 (Pre-increment)
console.log(x++); // 6 (Post-increment)
console.log(x);   // 7
console.log(--x); // 6 (Pre-decrement)
console.log(x--); // 6 (Post-decrement)
console.log(x);   // 5

console.log("\n"); 

// Arithmetic Assignment Operators
x = 10;
x += 5;  
console.log(x);  // 15

x -= 2;
console.log(x);  // 13

x *= 2;
console.log(x);  // 26

x /= 2;
console.log(x);  // 13

x %= 4;
console.log(x);  // 1

x **= 3;
console.log(x);  // 1



// Comparison operators

// == Equal to only checks the value
// === Equal value and equal type

console.log(5 == "5");   // true
console.log(5 === "5");  // false
console.log(10 != "10"); // false
console.log(10 !== "10");// true
console.log(8 > 3);      // true
console.log(3 < 8);      // true
console.log(5 >= 5);     // true
console.log(4 <= 3);     // false



// Logical operators
console.log(true && false);  // false
console.log(true || false);  // true
console.log(!false);         // true
console.log((5 > 3) && (8 < 10));  // true
console.log((5 > 10) || (8 < 10)); // true
console.log(!(5 > 10));             // true



// Bitwise operators
let m = 5, n = 3;
console.log(m & n);  // 1 --> 0101 & 0011 = 0001 (1)
console.log(m | n);  // 7 --> 0101 | 0011 = 0111 (7)
console.log(m ^ n);  // 6 --> 0101 ^ 0011 = 0110 (6)
console.log(~m);      // -6 --> ~0101 = 1010 (6) [2's complement]
console.log(m << 1);  // 10 --> 0101 << 1 = 1010 (10)
console.log(m >> 1);  // 2  --> 0101 >> 1 = 0010 (2)


// Ternary operator
let age = 20;
let result = (age >= 18) ? "Adult" : "Minor"; 
console.log(result);  // Adult

// Typeof operator
let Name = "John";
console.log(typeof Name);  // string
console.log(typeof 5);     // number
console.log(typeof true);  // boolean
console.log(typeof [1, 2, 3]);  // object (array)
console.log(typeof {a: 1, b: 2});  // object (object)
console.log(typeof function(){});  // function
console.log(typeof undefined);     // undefined
console.log(typeof null);          // object
console.log(typeof NaN);           // number
console.log(typeof Infinity);      // number
console.log(typeof Symbol());      // symbol
console.log(typeof BigInt(123));   // bigint
console.log(typeof 5n);            // bigint



// Instanceof operator
//only for objects and classes
let arr = [1, 2, 3];
console.log(arr instanceof Array);  // true
console.log(arr instanceof Object); // true
console.log(arr instanceof Function); // false
console.log(arr instanceof String); // false
console.log(arr instanceof Number); // false
console.log(arr instanceof Boolean); // false


