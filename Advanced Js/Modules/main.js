/*

We need to use type="module" to use modules if we are using js in browser 
	<script type="module" src="Modules/main.js"></script>

	📌 Important Notes : 
	🔒 Without type="module", you cannot use import or export in browser JS 
	🌐 Modules are loaded via HTTP. So if you open the file directly (file:///), imports may fail. 
	
	✅ We must set type="module" to use import/export in JS 

*/

// 1. Import named exports (variables, constants, functions, classes)
import {
	app_name,
	PI,
	skills,
	user,
	greet,
	Calculator
} from './module.js';

// 2. Import default export separately (only one default allowed)
import sayHello from './module.js';

// 3. Use the imported variables
console.log("App Name:", app_name);
console.log("Value of PI:", PI);

// 4. Use the imported array
console.log("Skills List:", skills);

// 5. Use the imported object
console.log("User Info:", user);

// 6. Use the imported function
console.log(greet(user.name));

// 7. Use the imported class
const calc = new Calculator();
console.log("Add 10:", calc.add(10));
console.log("Subtract 3:", calc.subtract(3));
console.log("Reset:", calc.reset());

// 8. Use the default export
console.log(sayHello());
