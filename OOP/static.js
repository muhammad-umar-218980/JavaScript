/*

🔹 Static Methods & Properties in JavaScript:
Static methods and properties belong to the class itself, not the instances (objects) created from the class. This means you cannot access them using an instance, only using the class name.

*/

// 1️⃣ Static Methods
// A static method is defined using the static keyword and can only be called on the class.

class Math{
	static add(a, b) {
		return a + b;
	}

	static mul(a , b){
		return a * b;
	}

	sub(a,b){
		return `Subtraction : ${a - b}` ;
	}

	div(a,b){
		return `Division : ${a / b}`;
	}
};

let Obj1 = new Math();
console.log(Obj1.sub(7.5,6));
console.log(Obj1.div(7.5,6));

// console.log(Obj1.add(1,3)); // Error: add is not a function
console.log(Math.add(1,3)); // Output: 4































// 2️⃣ Static Properties
// A static property is also defined using the static keyword and belongs to the class instead of an instance.

class Car {
	static type = "Vehicle";

	constructor(brand) {
		this.brand = brand;
	}
}

console.log(Car.type); // ✅ Output: Vehicle

let myCar = new Car("Toyota");
console.log(`myCar type : ${myCar.type}`); // myCar type : undefined

















// 3️⃣ Static Methods Example 

class User {
	static idCounter = 1;

	constructor(name) {
		this.name = name;
		this.userId = User.generateId();
	}

	static generateId() {
		return User.idCounter++;
	}
}

let user1 = new User("Alice");
let user2 = new User("Bob");

let userArray = [new User("Charlie"), new User("David")];

console.log(user1.userId); // ✅ Output: 1
console.log(user2.userId); // ✅ Output: 2
console.log(User.idCounter); // ✅ Output: 5
// console.log(user1.generateId()); // ❌ Error! Cannot call static method from an instance.























// 4️⃣ Can Static Methods Access Instance Properties?
// If we try to access a static method using this then the this.propertyname will return the class name 


class PersonClass {
	constructor(name) {
		this.name = name;
	}

	static sayHello() {
		console.log(`Hello, ${this.name}`); 
	}

	static sayHello2(){
		console.log(`Hello, ${PersonClass.name}`); // ✅ Output: Hello, Person
	}
}

let p1 = new PersonClass("Ali");
PersonClass.sayHello(); // Output: Hello, PersonClass
PersonClass.sayHello2();