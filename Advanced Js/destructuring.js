/*

💡 What is Destructuring?

Destructuring means extracting values from arrays or objects and assigning them to variables in a clean, short way.

*/



// 🔴 1. Array Destructing 

/* 
Instead of writing this
let arr = [10, 20, 30];
let a = arr[0];
let b = arr[1];
let c = arr[2];

*/

// We can write like

let [a, b, c] = [10, 20, 30];
console.log(a); // 10
console.log(b); // 20

// We can also skip values 

let arr = [1,2,3];
let [x,,z] = arr ;
console.log(`x : ${x}    z : ${z}`); // x : 1    z : 3




















// 🔴 2. Object Destructing

let person = { name: "Umar", age: 20 };
// let name = person.name;
// let age = person.age;

// We can write instead of this 

let { name, age } = person;
console.log(name); // Umar


// We can also rename variables 

let { name: userName, age: userAge } = person;
console.log(userName); // Umar


















// 3. 🔴Destructing in function parameters

let person1 = {
	name: "Umar",
	age : 20,
	id : 101
}

function showUser({name,id}){
	console.log(name,id);
}

showUser(person1) // Umar 101 




























// 4. 🔴 Nested Destructing

let student = {
	Name: "Ali",
	marks: {
		math: 90,
		english: 85
	}
};

let {
	Name,
	marks: { math }
} = student;

console.log(Name); // Ali
console.log(math); // 90
