/* 
===================================================
🧠 JavaScript Strict Mode (`"use strict"`)
===================================================

Strict mode is a way to opt in to a restricted variant of JavaScript.
It helps catch silent bugs and makes your code more predictable and safe.

✅ Main Benefits:
- Prevents undeclared global variables
- Avoids accidental property creation
- Fixes `this` behavior in functions
- Throws real errors for silent bugs

We can enable strict mode by adding `"use strict";` at the top of our script or function.

*/


// ----------------------------------------------------
// 1. ❌ Prevents accidental global variables
// ----------------------------------------------------

"use strict";

function addNumbers(a, b) {
	result = a + b; // ❌ This would create a global variable in non-strict mode
	return result;
}
// console.log(addNumbers(3, 4)); // ReferenceError: result is not defined

function fixedAddNumbers(a, b) {
	let result = a + b; // ✅ Correctly declared
	return result;
}
console.log("Fixed add:", fixedAddNumbers(5, 7)); // 12



// ----------------------------------------------------
// 2. 📛 `this` is undefined in strict mode (regular functions)
// ----------------------------------------------------

function showThisExample() {
	"use strict";
	console.log("this:", this); // undefined (not window/global)
}
showThisExample();

const obj = {
	name: "Umar",
	show: function () {
		"use strict";
		console.log("Inside object method, this.name:", this.name); // ✅ Correct this
	}
};
obj.show();



// ----------------------------------------------------
// 3. 🛑 Duplicate parameters are disallowed
// ----------------------------------------------------

// function badExample(a, a, b) { // ❌ SyntaxError in strict mode
//     return a + b;
// }


// ----------------------------------------------------
// 4. 🚫 Octal literals are forbidden in strict mode
// ----------------------------------------------------

// let num = 0755; // ❌ SyntaxError: Octal literals not allowed
let fixedNum = parseInt("0755", 10); // ✅ Use parseInt with base
console.log("Parsed number:", fixedNum);


// ----------------------------------------------------
// 5. 🚷 Cannot assign to read-only properties
// ----------------------------------------------------

const person = {};
Object.defineProperty(person, "id", {
	value: 101,
	writable: false,
	configurable: false
});

// person.id = 202; // ❌ TypeError
console.log("Read-only ID:", person.id);


// ----------------------------------------------------
// 6. 🔒 Cannot add properties to non-extensible objects
// ----------------------------------------------------

const config = {
	debug: true
};
Object.preventExtensions(config);

// config.mode = "production"; // ❌ TypeError: Can't add property to non-extensible object
console.log("Config object:", config);


// ----------------------------------------------------
// 7. 🧹 Cannot delete variables or functions
// ----------------------------------------------------

let counter = 10;
// delete counter; // ❌ SyntaxError
console.log("Counter:", counter);

function welcome() {
	return "Welcome!";
}
// delete welcome; // ❌ SyntaxError
console.log(welcome());


// ----------------------------------------------------
// 8. 🚫 `with` statement is disallowed
// ----------------------------------------------------

// with (Math) { // ❌ SyntaxError: Strict mode code may not include a with statement
//     console.log(sin(90));
// }


/*
===================================================
📌 Summary — Why Use `"use strict"`?
===================================================

🔸 Enforces variable declarations (`let`, `const`, `var`)
🔸 Prevents `this` from defaulting to `window` in functions
🔸 Blocks unsafe practices (e.g., duplicate params, octals)
🔸 Makes code cleaner, safer, and easier to debug

Strict mode is recommended in all modern JS apps.
Just place `"use strict";` at the top of your file or function!
*/
