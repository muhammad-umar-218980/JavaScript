// strings are immutable in javascript
// once a string is created, it cannot be changed
// any operation that seems to change a string actually creates a new string
// the original string is left unchanged
// this is why strings are immutable


let fullName = `Muhammad umar`;
fullName[9] = `U`;  // ❌ This won't work
console.log(fullName);  // Output: "Muhammad umar" (unchanged)


// using slice method
let newFullName = fullName.slice(0, 9) + 'U' + fullName.slice(10);
console.log(newFullName);  // ✅ "Muhammad Umar"


// OR


// Using an array
nameArray = fullName.split("");  // Convert to array
nameArray[9] = 'U';  // Modify character
fullName = nameArray.join("");  // Convert back to string
console.log(fullName);  // ✅ "Muhammad Umar"

