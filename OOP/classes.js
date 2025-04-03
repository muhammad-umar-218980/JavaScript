/*

Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are not shared with ES5 class-like semantics.

*/

// Creating a Class
// 🔴 NOTE : We dont nned to declare variables in class explicitly . They are created automatically when we use them in class.

class Car {
	constructor(brand = "Unknown", model = "Unknown") { // Default values
		this.brand = brand;
		this.model = model;
		console.log("Car created");
	}

	display() {
		console.log(`Car: ${this.brand} ${this.model}`);
	}

	start() {
		console.log("Car started");
	}

	stop() {
		console.log("Car stopped");
	}

	// Getter and Setter
	setColor(color = `Black`) {
		this.color = color;
	}

	getColor() {
		return this.color;
	}
}

// Creating an Object and the constructor automatically calls when the object is created

// Creating objects with and without parameters
let Car1 = new Car("Toyota", "Corolla"); // ✅ Car created
Car1.display(); // ✅ Car: Toyota Corolla

let Car2 = new Car("Honda", "Civic"); // ✅ Car created
Car2.display(); // ✅ Car: Honda Civic

let Car3 = new Car(); // ✅ Car created (uses default values)
Car3.display(); // ✅ Car: Unknown Unknown

let Car4 = new Car("BMW"); // ✅ Car created (uses default values)
Car4.display(); // ✅ Car: BMW Unknown

let Car5 = new Car(undefined, "X5"); // ✅ Car created (uses default values)
Car5.display(); // ✅ Car: Unknown X5





Car1.setColor("Red");
console.log(Car1.color); // ✅ Red

Car2.setColor();
console.log(Car2.color); // ✅ Black

Car3.setColor("Blue", "White"); 
console.log(Car3.color); // ✅ Blue

Car4.setColor(undefined,"Green");
console.log(Car4.color); // ✅ Black

Car5.setColor("Yellow");
console.log(Car5.getColor()); // ✅ Yellow