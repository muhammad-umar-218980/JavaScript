/*

🔹 What is a Promise?
A Promise is a built-in JavaScript object that represents the future result (or failure) of an asynchronous operation.

You can think of it like this:
“I promise to return a result later.”

✅ It is a solution to the callback hell problem.
✅ It allows you to write cleaner and more readable asynchronous code.


A promise can be in one of three states:

Pending – The operation is still going on.

Fulfilled (Resolved) – The operation was successful, and the promise has a result.

Rejected – The operation failed, and the promise has a reason (error).







🔹 Creating a Promise
A promise is created using the Promise constructor, which takes a function as an argument. This function is called the executor function. The executor function takes two arguments: resolve and reject.
The resolve function is called when the operation is successful, and the reject function is called when the operation fails.




🔴 SYNTAX:
let myPromise = new Promise(function(resolve, reject) {

if ( successful ) {
	resolve("Success!");
} else {
	reject("Something went wrong");
}
});
	

OR 
we can use arrow function as well

let myPromise = new Promise((resolve, reject) => {
if ( successful ) {
	resolve("Success!");
}else {
	reject("Something went wrong");
}
});



Here resolve and reject are builtin functions that are provided by the Promise constructor. You can call them to indicate whether the operation was successful or not.













🔹  Does the Promise constructor always take a callback func ?

In JavaScript, the Promise constructor always takes a callback function as its parameter. This callback is often called the "executor function" and has a specific signature:

new Promise((resolve, reject) => {
	/ Promise implementation goes here
});



The executor function receives two arguments:

✅ resolve: A function to call with the resolved value when the operation completes successfully
✅ reject: A function to call with the reason when the operation fails

This executor function runs immediately when the Promise is created, and it's where you typically place asynchronous code. The Promise will remain pending until either resolve() or reject() is called.



*/


// Creating a new Promise for reject
let myPromise = new Promise((resolve, reject) => {
	// Asynchronous operation
	setTimeout(() => {
		const success = false; // Simulating success or failure
		if (success) {
			resolve("Operation was successful!"); // Resolve the promise
		} else {
			reject("Operation failed!"); // Reject the promise
		}
	}, 1000); // 1 second delay
});

console.log(myPromise); 



// creating a new Promise for resolve

let myPromise2 = new Promise((resolve, reject) => {
	// Asynchronous operation
	setTimeout(() => {
		const success = true; // Simulating success or failure
		if (success) {
			resolve("Operation was successful!"); // Resolve the promise
		} else {
			reject("Operation failed!"); // Reject the promise
		}
	}, 1000); // 1 second delay
});

console.log(myPromise2);



















































// 🔹 Returning a promise from a function

function getData(dataId){
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log(`Data for id ${dataId} fetched`);
			resolve(`success`)
		}, 5000);
	});
}

let p1 = getData(1);
let p2 = getData(2);
let p3 = getData(3);

// They all will be fetched at the same time because they are not dependent on each other.



// 🔴 In general programming we do not creaete or return promises from functions. We use them to handle asynchronous operations.

// We usually get a promise from an API or a library that performs asynchronous operations, such as fetching data from a server, reading files, etc.

// Then we will use the promise to handle the result of that operation using .then() and .catch() methods.

// If the promise is resolved, we will get the result in the .then() method and if the promise is rejected, we will get the error in the .catch() method.


// These will be defined in the next section.