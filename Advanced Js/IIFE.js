/*

IIFE stands for Immediately Invoked Function Expression.

It's a function that runs as soon as it is defined.

*/

(function () {
	console.log("IIFE executed!");
})();

// We dont need to call it it automatically calls when created


let func = () =>{
	console.log(`IIFE 2`);
}

(func)(); // Executed without calling it.





(() => {
	console.log("Arrow IIFE executed!");
})();




// 🔴 IIFE are also used for async functions

(async function () {
	// Asynchronous code inside an IIFE
	let result = await new Promise((resolve) => {
		setTimeout(() => resolve("Hello from async IIFE!"), 1000);
	});

	console.log(result); // Outputs: Hello from async IIFE!
})();

// Immediate execution: It's useful for executing asynchronous code without needing to declare a named function.






















// EXAMPLE with fetch()


(async function () {
	try {
		let response = await fetch("https://jsonplaceholder.typicode.com/posts");
		let data = await response.json();
		console.log(data[0].title); // Logs the fetched data
	} catch (error) {
		console.log("Error:", error);
	}
})();
