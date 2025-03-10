/*

indexof() - returns the index of first occurence of a substring in a string
lastIndexOf() - returns the index of last occurence of a substring in a string

if not found , both methods return -1

*/

let fullName = "Muhammad Umar";

console.log(fullName.indexOf("Umar"));   // ✅ 9 (Starts at index 9)
console.log(fullName.indexOf("a"));      // ✅ 3 (First "a" is at index 3)
console.log(fullName.indexOf("xyz"));    // ❌ -1 (Not found)
console.log(fullName.indexOf("a", 4));   // ✅ 6 (Starts searching from index 4)



console.log(fullName.lastIndexOf("a"));    // ✅ 11 (Last "a" is at index 10)
console.log(fullName.lastIndexOf("Umar")); // ✅ 9
console.log(fullName.lastIndexOf("xyz"));  // ❌ -1 (Not found)
console.log(fullName.lastIndexOf("a", 7)); // ✅ 6 (Searches backward from index 7)




/*

startsWith() - returns true if a string starts with a specified substring, otherwise false
endsWith() - returns true if a string ends with a specified substring, otherwise false

string.startsWith(searchString, position)
string.endsWith(searchString, length)

*/


console.log(fullName.startsWith("Muh"));  // ✅ true
console.log(fullName.startsWith("Umar")); // ❌ false
console.log(fullName.startsWith("Umar", 9)); // ✅ true (Start checking from index 9)


console.log(fullName.endsWith("Umar"));  // ✅ true
console.log(fullName.endsWith("Muh"));   // ❌ false
console.log(fullName.endsWith("ammad", 7)); // ✅ true (Check only first 7 chars)




/*

includes(substring, start_index) - returns true if substring is found in string, otherwise false


string.includes(searchString, position)
	searchString → The substring you want to search for.
	position (optional) → The index from where the search should start. Default is 0.

*/

let text = "Hello, JavaScript!";
console.log(text.includes("JavaScript")); // true
console.log(text.includes("Python"));     // false


console.log(text.includes("Hello", 5)); // false (starts searching from index 5)
console.log(text.includes("Java", 5));  // true (found at index 7)


// case sensitive
console.log("Hello JavaScript".includes("javascript")); // false



/*

search() - returns the index of first match of a regular expression in a string, otherwise -1

*/

console.log(fullName.search("Umar"));   // ✅ 9
console.log(fullName.search(/m/i));     // ✅ 0 (First "m", case-insensitive)
console.log(fullName.search("xyz"));    // ❌ -1 (Not found)
