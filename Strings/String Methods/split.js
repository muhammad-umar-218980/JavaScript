/*

split() method is used to split a string into an array of substrings, and returns the new array.

	✅ Returns an array → Does not change the original string.
	✅ Case-sensitive → "umar" ≠ "Umar".
	✅ Splits the string based on the separator.
	✅ If the separator is not provided, the entire string is returned as the only element of the array.

Syntax:
	str.split(separator, limit)

	✅ separator (Optional) → Defines where to split.
	✅ limit (Optional) → Number of splits to perform.

🚨 If no separator is provided, the entire string remains unchanged in an array.
*/


// split by space 
let str = "Hello World";
let arr = str.split(" ");
console.log(arr); // ✅ ["Hello", "World"]

// split by comma
str = "Apple, Banana, Kiwi";
arr = str.split(", ");
console.log(arr); // ✅ ["Apple", "Banana", "Kiwi"]

// split by empty string → returns each character as an element
str = "Hello";
arr = str.split("");
console.log(arr); // ✅ ["H", "e", "l", "l", "o"]

// split by empty string with limit
str = "Hello";
arr = str.split("", 3);
console.log(arr); // ✅ ["H", "e", "l"]

let fullName = "Muhammad Umar";
let limited = fullName.split(" ", 1);
console.log(limited);
// ✅ ["Muhammad"]  (Only first word is taken)


// split by specific letter
arr = fullName.split("m");
console.log(arr); // ✅ ["Muha", "" , "ad U", "ar"]

// split by specific letter with limit
arr = fullName.split("m", 2);
console.log(arr); // ✅ ["Muha", ""]


// split a sentence into words
let sentence = "I am learning JavaScript";
arr = sentence.split(" ");
console.log(arr); // ✅ ["I", "am", "learning", "JavaScript"]

