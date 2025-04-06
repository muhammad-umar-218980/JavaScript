
/*

Asynchronous JavaScript:

Asynchronous code allows multiple operations to be executed concurrently, meaning that while one task is waiting for a response (like a network request), other tasks can continue executing. This is particularly useful for tasks that involve waiting, such as fetching data from a server or reading files.



🔴 If one task is taking a delay the statements after the task will not wait for the task to be completed and they are executed and as soon as the task is completed it executes.

*/



// Example of asynchronous code using setTimeout
function asynchronousTask() {
	console.log("Task started");
	setTimeout(() => {
		console.log("Task completed after 3 seconds");
	}, 3000); // Simulating a delay of 3 seconds
	// 3s = 3000 milliseconds
}

asynchronousTask(); // This will not block the execution of the next line of code

console.log(`This will execute immediately after the task started`);
console.log(`Then this will execute`)

// Here the console.log statement will execute immediately after the task started, even though the task itself takes 3 seconds to complete. This is because the setTimeout function is non-blocking, allowing other code to run while waiting for the timeout to finish.

// SO the console statement will print then the function will be executed after 3 seconds.
// This is a simple example of asynchronous code. The `setTimeout` function allows the task to be executed after a delay without blocking the execution of the next line of code. This is particularly useful for tasks that involve waiting, such as fetching data from a server or reading files.










/*

🔴 Key Asynchronous Features in JavaScript:

Callbacks: Functions passed as arguments to other functions, to be executed once the asynchronous operation completes.​

Promises: Objects representing the eventual completion (or failure) of an asynchronous operation, allowing chaining of operations.​

Async/Await: Syntax that simplifies working with Promises, making asynchronous code look and behave like synchronous code.

*/ 