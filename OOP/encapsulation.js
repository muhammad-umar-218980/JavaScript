/*

Encapsulation in JavaScript 🚀

Encapsulation is one of the core principles of Object-Oriented Programming (OOP). It means hiding the internal details of an object and only exposing what’s necessary. This helps protect data and improves code maintainability.

In JavaScript We can achieve encapsulation using two ways:
1. Using # (private fields)
2. Using Getters and Setters

*/

// Using # (private fields)

class Person {
	#name;
	#age;

	constructor(name, age) {
		this.#name = name;
		this.#age = age;
	}

	display() {
		console.log(`${this.#name} is ${this.#age} years old.`);
	}
}

let P1 = new Person("John", 25);

//console.log(P1.#name); // SyntaxError: Private field '#name' must be declared in an enclosing class

P1.display(); // John is 25 years old.




















// Using Getters and Setters

class Car {
	#brand;

	constructor(brand) {
		this.#brand = brand;
	}

	// Getter method to access private property
	getBrand() {
		return this.#brand;
	}

	// Setter method to update private property
	setBrand(newBrand) {
		if (newBrand.length > 2) {
			this.#brand = newBrand;
		} else {
			console.log("Brand name is too short!");
		}
	}
}

let car3 = new Car("BMW");
console.log(car3.getBrand()); // ✅ BMW

car3.setBrand("VW"); // ❌ Brand name is too short!
car3.setBrand("Mercedes"); // ✅ Updates the brand
console.log(car3.getBrand()); // ✅ Mercedes
