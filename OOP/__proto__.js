/*

.__proto__ is a special property in JavaScript that allows access to an object's prototype (i.e., the object from which it inherits properties and methods).


NOTE : .__proto__ is deprecated and should not be used in production code. Use Object.getPrototypeOf() instead.


🔴 We can also use Class Based Inheritance 
*/

console.log(`Using __proto__ :`);
const person = {
	name: "Umar",
	age: 20,
	showAge() {
		console.log(this.age);
	}
};

const student = {
	university: "NED University",
	showAge(){
		console.log(`Using Student object : ${this.age}`)
	}
};

student.__proto__ = person;

console.log(student.name); // Umar
console.log(student.age);  // 20
console.log(student.university); // NED University
student.showAge(); // Using Student object : 20

console.log(student); // { university: 'NED University' }

//🔴 NOTE : *If object & prototype have same method, object’s method will be used.


















// using Object.setPrototypeOf() method
console.log(`\n\n using Object.setPrototypeOf() method :`);


Object.setPrototypeOf(student, person);

console.log(student.name); // Umar (inherited)
console.log(student.age);  // 20 (inherited)
console.log(student.university); // NED University