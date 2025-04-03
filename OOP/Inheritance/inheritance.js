/*

Inheritance is a mechanism in which a new class is derived from an existing class. Inheritance allows us to reuse the code functionality and fast implementation time. The derived class (child class) inherits all the features from the base class (parent class) and can have additional features of its own.

*/



/*

✅ How Inheritance Works?
Parent Class (superclass) → Contains common properties & methods.

Child Class (subclass) → Inherits from the parent using  the 'extends' keyword.

super() → Calls the parent constructor inside the child class.

*/


// Parent class
class Vehicle {
	constructor(brand) {
		this.brand = brand;
	}

	displayBrand() {
		console.log(`Brand: ${this.brand}`);
	}
}

// Child class (inherits from Vehicle)
class Car extends Vehicle {
	constructor(brand, model) {
		super(brand); // Calls parent constructor
		this.model = model;
	}

	displayCar() {
		console.log(`Car: ${this.brand} ${this.model}`);
	}
}

let myCar = new Car("Toyota", "Corolla");
myCar.displayBrand(); // ✅ Brand: Toyota (from parent)
myCar.displayCar();   // ✅ Car: Toyota Corolla










// Method Overriding
// The child class can override methods from the parent class.


class Animal {
	speak() {
		console.log("Animal is making a sound");
	}
}

class Dog extends Animal {
	speak() {
		console.log("Dog barks! 🐶");
	}
}

let pet = new Dog();
pet.speak(); // ✅ Dog barks! (Overrides parent method)
