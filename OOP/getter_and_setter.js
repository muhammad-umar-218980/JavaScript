/*

🔹 Getters and Setters in JavaScript
Getters (get) and Setters (set) are special methods in JavaScript classes that allow you to control access to an object's properties.



🔴 Getters and Setters are commonly used to access and modify private properties in JavaScript. Private properties are not directly accessible outside the class, so getters and setters provide a controlled way to interact with them.


🔴 get and set keywords are already built-in in JavaScript, so you don't need to define them yourself. You can simply use them as method names in your class using get and set keywords.


🟢 If we want to make our own getter and setter we can use get and set as functions like getAge() and setAge() and javascript will treat them as normal class methods not getter and setter but we can define them in a way so that they behave like getter and setter like wwe define our own getter and setters in C++ or Java.


🎯 Best Practice:
Use get and set when working with private properties to make your code more readable and natural. Use regular methods (getAge() and setAge()) when you don't want them to behave like properties.


*/


// Getter
// A getter is a method that allows you to retrieve a property value as if it were a regular property. It is used by get keyword.


class Person1 {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	get info() {
		return `${this.name} is ${this.age} years old.`;
	}
}

let person1 = new Person1("Ali", 25);
console.log(person1.info); // Output: Ali is 25 years old.

// Access info like a regular property not like a method















// Setter
// A setter is a method that allows you to set a property value as if it were a regular property. It is used by set keyword.

class Person2 {
	constructor(name, age) {
		this.name = name;
		this._age = age; // Using `_age` to avoid conflict with setter
	}

	get age() {
		return this._age;
	}

	set age(newAge) {
		if (newAge < 0) {
			console.log("Age can't be negative!");
		} else {
			this._age = newAge;
		}
	}
}

let person2 = new Person2("Sara", 22);
console.log(person2.age);  // Output: 22

person2.age = -5;  // Output: Age can't be negative!
person2.age = 30;
console.log(person2.age);  // Output: 30
























// Example 2 : Using getter and setter for private properties

console.log(`\n\nExample 2 \n\n\n`)
class BankAccount {
	#balance; // Private property

	constructor(amount) {
		this.#balance = amount;
	}

	get balance() {
		return this.#balance;
	}

	set balance(amount) {
		if (amount >= 0) {
			this.#balance = amount;
		} else {
			console.log("Balance can't be negative!");
		}
	}
}

let account = new BankAccount(500);
console.log(account.balance);  // Output: 500
account.balance = -100;        // Output: Balance can't be negative!
account.balance = 1000;
console.log(account.balance);  // Output: 1000
// console.log(account.#balance); // ❌ Error: Private field can't be accessed































// Example 3 : Modifying a Private Property with a Setter

console.log(`\n\nExample 3\n\n\n`);
class User {
	#password; // Private property

	constructor(password) {
		this.#password = password;
	}

	// using getter as property
	get password() {
		return "Access Denied!";
	}



	// defining our own getter
	getPassword(){
		return this.#password;
	}


	// using setter as property
	set password(newPassword) {
		if (newPassword.length >= 6) {
			this.#password = newPassword;
			console.log("Password updated successfully.");
		} else {
			console.log("Password must be at least 6 characters long.");
		}
	}

	// defining our own setter
	setPassword(newPassword){
		if (newPassword.length >= 6) {
			this.#password = newPassword;
		}else{
			console.log("Password must be at least 6 characters long.");
		}
	}
}

let user = new User("abc123");
console.log(user.password); // Output: Access Denied!
console.log(user.getPassword()); // Output: abc123

user.password = "123"; // Output: Password must be at least 6 characters long.
user.password = "securePass"; // Output: Password updated successfully.

console.log(user.getPassword()); // Output: securePass



user.setPassword(`Muhammad Umar`);
console.log(user.getPassword()); // Output: Muhammad Umar