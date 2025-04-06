/*

.then() and .catch() are methods used with Promises in JavaScript to handle asynchronous operations. They allow you to define what should happen when a Promise is resolved (fulfilled) or rejected (failed).

.then() is used to specify the code that should run when a Promise is resolved successfully. It takes a callback function as an argument, which receives the resolved value of the Promise.

.catch() is used to specify the code that should run when a Promise is rejected. It also takes a callback function as an argument, which receives the error reason for the rejection.

*/







/*

🔸 .then() – What does it do?
The .then() method is used to handle the result of a successful Promise (when it is resolved).

It receives the value passed by resolve().

✅ Syntax:
promise.then(successCallback);











🔸 .catch() – What does it do?
The .catch() method is used to handle errors or failures (when a promise is rejected).

It receives the value passed by reject().

❌ Syntax:
promise.catch(errorCallback);





FINAL SYNTAX:

promise.then(successCallback).catch(errorCallback);


*/

// ✅ Example:
1
let p1 = new Promise((resolve, reject) => {
	let state = true;

	if (state) {
		resolve("Data loaded successfully");
	}else {
		reject("Data loading failed");
	}
});

p1.then((result) => {
	console.log("✅", result);
}).catch((error) => {
	console.log("❌", error);
});


// Output: ✅ Data loaded successfully










let p2 = new Promise((resolve, reject) => {
	let state = false;

	if (state) {
		resolve("Data loaded successfully");
	}else {
		reject("Data loading failed");
	}
});

p2.then((result) => {
	console.log("✅", result);
}).catch((error) => {
	console.log("❌", error);
});


// 🔴 If Promise is resolved we move to then() method otherwise the catch() method

// With Promises, either the .then() or the .catch() will execute, but never both from the same Promise state change like if else statements.