/*

🔹 super Keyword in JavaScript 🔹
The super keyword in JavaScript is used in class inheritance to:

1️⃣ Call the constructor of the parent class (super())
2️⃣ Access parent class methods (super.methodName())
3️⃣ Call parent class methods from the child class

*/



// 1️⃣ super() → Calls the Parent Constructor
// When a child class extends a parent class, we use super() inside the constructor to call the parent's constructor before accessing this.

class Vehicle {
	constructor(brand) {
		this.brand = brand;
	}
}

class Car extends Vehicle {
	constructor(brand, model) {
		super(brand); // Calls Vehicle's constructor
		this.model = model;
	}

	display() {
		console.log(`Car: ${this.brand} ${this.model}`);
	}
}

let myCar = new Car("Toyota", "Corolla");
myCar.display(); // ✅ Output: Car: Toyota Corolla

/*

💡 Why super(brand)?

Without it, this.brand = brand; inside Car would throw an error (ReferenceError in strict mode).

super() must be the first statement in the child constructor.

If we only write 

constructor(brand, model) {
		this.model = model;
	}

this will throw an error

super.js:28 Uncaught ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
	at new Car (super.js:28:3)
	at super.js:36:13


OR if we write super() without any arguments then the brand will be undefined

constructor(brand, model) {
		super(); 
		this.model = model;
	}

myCar.display(); // Output: Car: undefined Corolla



*/























// 2️⃣ super.methodName() → Calls Parent Class Methods
// The super keyword allows us to call methods from the parent class.



class Animal {
	makeSound() {
		console.log("Some generic animal sound");
	}
}

class Dog extends Animal {
	makeSound() {
		super.makeSound(); // Calls Animal's method
		console.log("Bark! 🐶");
	}
}

let pet = new Dog();
pet.makeSound();
/*
✅ Output:
Some generic animal sound
Bark! 🐶
*/


/*

If we only write makeSound() without super.makeSound() then this will throw an error

super.js:108 Uncaught ReferenceError: makeSound is not defined
	at Dog.makeSound (super.js:108:3)
	at super.js:114:5
*/




















