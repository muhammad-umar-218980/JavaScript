/*

🔹 Polymorphism in JavaScript 🔹
Polymorphism means "many forms" and allows methods to have different implementations in different classes, even if they share the same name.



✅ Achieving Polymorphism in JavaScript
In JavaScript, polymorphism is mainly achieved through:
1️⃣ Method Overriding (Common in class inheritance)
2️⃣ Method Overloading (JavaScript does not support true overloading, but we can simulate it)


Also polymorphism can be achieved through :
3️⃣ Duck typing, where the type or class of an object is less important than the methods it defines and how they are used.

4️⃣ Function Polymorphism 

*/








// 1️⃣ Method Overriding

class Animal {
	makeSound() {
		console.log("Some generic animal sound");
	}
}

class Dog extends Animal {
	makeSound() {
		console.log("Bark! 🐶"); // Overriding parent method
	}
}

class Cat extends Animal {
	makeSound() {
		console.log("Meow! 🐱"); // Overriding parent method
	}
}

let animals = [new Dog(), new Cat()];

animals.forEach(animal => animal.makeSound());

/*
✅ Output:
Bark! 🐶
Meow! 🐱
*/


let cat1 = new Cat();
let cat2 = new Cat();
let dog1 = new Dog();
let dog2 = new Dog();

let animals2 = [cat1, cat2, dog1, dog2];
animals2.forEach(animal => animal.makeSound());

let cat3 = new Cat();
let dog3 = new Dog();

cat3.makeSound(); // Meow! 🐱
dog3.makeSound(); // Bark! 🐶




















// 2️⃣ Method Overloading (Not Built-in, But Can Be Simulated)

// JavaScript does not support method overloading in the traditional sense, but we can simulate it using default parameters or the arguments object.

class Calculator {
	add(a = 0, b = 0, c = 0, d = 0, e = 0) {
		return a + b + c + d + e;
	}
}

let calc = new Calculator();

console.log(calc.add());                  // Output: 0
console.log(calc.add(5));                 // Output: 5
console.log(calc.add(5, 10));             // Output: 15
console.log(calc.add(5, 10, 20));         // Output: 35
console.log(calc.add(5, 10, 20, 30));     // Output: 65
console.log(calc.add(5, 10, 20, 30, 40)); // Output: 105























// 3️⃣ Duck Typing

// JavaScript supports duck typing, meaning if an object has the required method, it can be used in place of another object.


class Bird {
	fly() {
		console.log("Flying high! 🐦");
	}
}

class Airplane {
	fly() {
		console.log("Taking off! ✈️");
	}
}


function letItFly(flyable) {
	flyable.fly(); // No type checking, just calls the fly method
}

let sparrow = new Bird();
let boeing = new Airplane();

letItFly(sparrow); // Output: Flying high! 🐦
letItFly(boeing); // Output: Taking off! ✈️































// 4️⃣ Function Polymorphism
// Functions can also exhibit polymorphic behavior by accepting different types of arguments and performing different operations based on the type dynamically.


function multiply(x, y) {
	return x * y;
}

console.log(multiply(5, 10));     // Output: 50 (Number * Number)
console.log(multiply("5", 10));   // Output: 50 (String * Number → Implicit Conversion)
