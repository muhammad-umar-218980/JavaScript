/*

The slice(start, end) method extracts a portion of a string and returns a new string, without modifying the original one.


✅ Returns a new string → Does not modify the original string.

✅ Takes two arguments:
start → Index where extraction begins (inclusive)
end → Index where extraction stops (exclusive)
	✅ If end is omitted, it slices till the end of the string.
	✅ Supports negative indices → Counts from the end (-1 is the last character).

*/


let fullName = "Muhammad Umar";

let firstName = fullName.slice(0, 8);  // "Muhammad" (index 0 to 7)
let lastName = fullName.slice(9);      // "Umar" (index 9 to end)
let lastThree = fullName.slice(-3);    // "mar" (last 3 chars)
let middle = fullName.slice(2, -2);    // "hammad Um" (excluding first 2 & last 2)

console.log(`Original: ${fullName}`);
console.log(`First Name: ${firstName}`);
console.log(`Last Name: ${lastName}`);
console.log(`Last 3 Characters: ${lastThree}`);
console.log(`Middle Part: ${middle}`);
