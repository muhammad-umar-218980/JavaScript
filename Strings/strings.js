let str1 = 'Hello';  // Single quotes
let str2 = "World";  // Double quotes
let str3 = `Hello, ${str2}!`; // Backticks (Template Literal)
console.log(str1); // Output: Hello
console.log(str2); // Output: World
console.log(str3); // Output: Hello, World!


str1 = "Hello, World!";   // Using double quotes
str2 = 'Hello, JavaScript!'; // Using single quotes
str3 = `Hello, ${str1}`;  // Using template literals (supports interpolation)
console.log(str1); // Output: Hello
console.log(str2); // Output: World
console.log(str3); // Output: Hello, World!

let text = "JavaScript";
console.log(text[0]); // Output: J
console.log(text.charAt(3)); // Output: a


// charAt() method
let fullName = "Muhammad Umar";

console.log(fullName.charAt(0));  // ✅ 'M'  (First character)
console.log(fullName.charAt(5));  // ✅ 'm'  (6th character)
console.log(fullName.charAt(12)); // ✅ 'r'  (Last character)
console.log(fullName.charAt(20)); // ❌ '' (Empty string, index out of range)


console.log(fullName[20]);  // ❌ undefined (Out of range)


