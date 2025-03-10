// trim() function
// trimStart() function
// trimEnd() function

// The trim() function is used to remove the white spaces from both the ends of the string.
// It does not remove the white spaces between the string.
//  It does not change the original string.
// It returns a new string with white spaces removed from both the ends.

// The trimStart() function is used to remove the white spaces from the start of the string.
// It does not remove the white spaces between the string.

// The trimEnd() function is used to remove the white spaces from the end of the string.
// It does not remove the white spaces between the string.

let fullName = "   Muhammad Umar   ";

let trimmedFullName = fullName.trim();
let trimmedStart = fullName.trimStart();
let trimmedEnd = fullName.trimEnd();

console.log(`Original: ${fullName}`);
console.log(`Trimmed: ${trimmedFullName}`);
console.log(`Trimmed Start: ${trimmedStart}`);
console.log(`Trimmed End: ${trimmedEnd}`);



console.log(`Trimmed: ${fullName.trim()}`);
console.log(`Trimmed Start: ${fullName.trimStart()}`);
console.log(`Trimmed End: ${fullName.trimEnd()}`);

