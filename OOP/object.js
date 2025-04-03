/*

What is an Object in JavaScript?
An object in JavaScript is a collection of properties and methods. It represents a real-world entity that has a state (data) and behavior (functions/methods).

🔴 Key Features of Objects:

Objects store data as key-value pairs (properties).

Objects can also have methods (functions inside an object).

Objects are used to group related data together.

*/


// There are several ways to create objects in JavaScript:


// 1. Object Literal
// The {} (object literal) method is always preferred because it is simpler and more readable.

console.log(`Method 1: Object Literal `);

let Obj1 = {
	name: "Muhammad Umar",  // Property
	age: 18,       // Property
	greet: function () {  // Method
		console.log("Hello, my name is " + this.name);
	},
	showAge(){
		console.log(this.age);
	}

	// We can also define methods without the function keyword and it is more readable.
};

console.log(Obj1.name); // Output: Muhammad Umar
Obj1.greet(); // Output: Hello, my name is Muhammad Umar
Obj1.showAge(); // Output: 18















console.log(`\n\nMethod 2 : Using new Object()`);
// 2. Using new Object() syntax

let car = new Object();

car.brand = "Toyota";
car.model = "Corolla";

// dont use () when defining methods in this way
car.display = function () {
	console.log(" Car Object : "+ this.brand + " " + this.model);
};
// For arrow functions dont use this keyword instead use the object name directly
car.start = () => console.log(`${car.brand} Car is starting...`); // Arrow function


car.display(); // Output: Toyota Corolla
car.start(); // Output: Car is starting...
















console.log(`\n\nMethod 3 : Using Object.create()`);
// 3. Using Object.create() method
// 👉 Best for creating objects that inherit from another object.

let animal = {
	makeSound: function () {
		console.log("Animal sound!");
	}
};

let dog = Object.create(animal);
dog.bark = function () {
	console.log("Woof! Woof!");
};

dog.makeSound(); // Output: Animal sound!
dog.bark(); // Output: Woof! Woof!












console.log(`\n\nMethod 4 : Using Constructor Functions`);
// 4. Using Constructor Functions
// 👉 Best for creating multiple objects with the same structure.

function Student(name, age) {
	this.  name = name;
	this.age = age;
	this.showInfo = function () {
		console.log(`Name: ${this.name}, Age: ${this.age}`);
	};
}

let student1 = new Student("Ali", 20);
let student2 = new Student("Sara", 22);

student1.showInfo(); // Output: Name: Ali, Age: 20
student2.showInfo(); // Output: Name: Sara, Age: 22








console.log(`\n\nMethod 5 : Using ES6 Classes`);
// 5. Using ES6 Classes (Modern Approach)

//class Person is a blueprint for creating objects.
//The constructor initializes properties when an object is created.

class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	greet() {
		console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
	}
}

let p1 = new Person("Ahmed", 30);
p1.greet(); // Output: Hi, I am Ahmed and I am 30 years old.

