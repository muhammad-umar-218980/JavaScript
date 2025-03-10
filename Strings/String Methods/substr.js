/*

substr(start, length) - Extracts a part of a string and returns a new string
        start - The position where to start the extraction. First character is at index 0
	length - The number of characters to extract. If omitted, it extracts the rest of the string

🚨 ⚠ substr() is deprecated and should be avoided! Use slice() instead.

*/

let fullName = "Muhammad Umar";

console.log(fullName.substr(0, 8));  // ✅ "Muhammad"  (Start at 0, take 8 chars)
console.log(fullName.substr(9, 4));  // ✅ "Umar"      (Start at 9, take 4 chars)
console.log(fullName.substr(3, 5));  // ✅ "ammad"     (Start at 3, take 5 chars)
console.log(fullName.substr(-4, 4)); // ✅ "Umar"      (Negative index: start from end)
