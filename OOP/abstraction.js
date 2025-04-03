/*

Abstraction is an OOP principle that hides complex implementation details from the user and only shows the essential features. This helps reduce code complexity and increases maintainability.



✅ How to Achieve Abstraction in JavaScript?

Since JavaScript does not have built-in abstract classes, we achieve abstraction using:
1️⃣ Abstract Classes (Using ES6 class)
2️⃣ Interfaces (Duck Typing)
3️⃣ Using Private properties and methods

*/




// 1️⃣ Abstract Classes (Using ES6 class)
class AbstractClass {
	constructor() {
		if (this.constructor === AbstractClass) {
			throw new Error("Cannot instantiate abstract class");
		}
	}

	abstractMethod() {
		throw new Error("Abstract method must be implemented");
	}
}

class ConcreteClass extends AbstractClass {
	abstractMethod() {
		console.log("Implemented abstract method in ConcreteClass");
	}
}

const concreteInstance = new ConcreteClass();
concreteInstance.abstractMethod(); // Output: Implemented abstract method in ConcreteClass

// let abstractInstance = new AbstractClass(); // ❌ Throws Error: Cannot instantiate abstract class








// OR 


class Vehicle {
	constructor(name) {
		if (this.constructor === Vehicle) {
			throw new Error("Cannot instantiate an abstract class");
		}
		this.name = name;
	}

	start() {
		throw new Error("Method 'start()' must be implemented");
	}
}

class Car extends Vehicle {
	start() {
		console.log(`${this.name} is starting... 🚗`);
	}
}

let myCar = new Car("Toyota");
myCar.start();  // ✅ Output: Toyota is starting...

// let myVehicle = new Vehicle("Bike"); // ❌ Error: Cannot instantiate an abstract class

/*
myVehicle.start(); // ❌ abstraction.js:55 Uncaught Error: Cannot instantiate an abstract class
	at new Vehicle(abstraction.js: 55: 10)
	at abstraction.js: 74: 17
*/

























// 2️⃣ Interfaces (Duck Typing)
// JavaScript does not support interfaces, but we can implement interface - like behavior using duck typing.

class Flyable {
	fly() {
		throw new Error("Method 'fly' must be implemented");
	}
}

class Bird extends Flyable {
	fly() {
		console.log("Bird is flying");
	}
}

class Airplane extends Flyable {
	fly() {
		console.log("Airplane is flying");
	}
}

function testFly(object) {
	if (typeof object.fly === "function") {
		object.fly();
	} else {
		console.log("This object cannot fly");
	}
}

let bird = new Bird();
let plane = new Airplane();

testFly(bird);   // Output: Bird is flying
testFly(plane);  // Output: Airplane is flying


























// 3️⃣ Using Private properties and methods

class Phone {
	#batteryLevel; // Private property

	constructor(model, battery) {
		this.model = model;
		this.#batteryLevel = battery;  // Hidden from direct access
	}

	turnOn() {
		this.#bootSystem();
		console.log(`${this.model} is now ON`);
	}

	#bootSystem() {  // Private method
		if (this.#batteryLevel < 10) {
			console.log("Battery too low to start!");
			return;
		}
		console.log("Booting system...");
	}

	getBatteryLevel(){
		return this.#batteryLevel;
	}
}

let myPhone = new Phone("iPhone 15", 50);
myPhone.turnOn();

// ✅ Output:
// Booting system...
// iPhone 15 is now ON

// console.log(myPhone.#batteryLevel); // ❌ Error: Private field '#batteryLevel' must be declared in an enclosing class

console.log(myPhone.getBatteryLevel());
