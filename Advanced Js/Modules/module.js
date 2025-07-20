// 1. Exporting a variable
export let app_name = "My Cool App";

// 2. Exporting a constant
export const PI = 3.14159;

// 3. Exporting an array
export const skills = ["HTML", "CSS", "JavaScript"];

// 4. Exporting an object
export const user = {
	name: "Muhammad Umar",
	age: 19,
	location: "Karachi"
};

// 5. Exporting a function
export function greet(name) {
	return `Hello, ${name}! Welcome to ${app_name}.`;
}

// 6. Exporting a class
export class Calculator {
	constructor() {
		this.result = 0;
	}

	add(x) {
		this.result = this.result + x;
		return this.result;
	}

	subtract(x) {
		this.result = this.result - x;
		return this.result;
	}

	reset() {
		this.result = 0;
		return this.result;
	}
}

// 7. Exporting default (only one default export per module)
export default function sayHello() {
	return "This is the default export from module.js!";
}
