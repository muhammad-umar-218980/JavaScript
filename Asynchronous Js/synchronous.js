/*

Synchronous JavaScript:

Synchronous code is executed sequentially, meaning each operation waits for the previous one to complete before proceeding. This can lead to delays if a task takes a long time to finish, as it blocks the execution of subsequent code.

*/


// Example of synchronous code

function synchronousTask() {
	// Simulate a long-running task
	console.log("Task started");
	for (let i = 0; i < 1e9; i++) { } // Simulating a delay
	console.log("Task completed");
}
synchronousTask(); // This will block the execution of the next line of code until the task is completed

synchronousTask(); // This will not start until the first task is completed

console.log(`Loop Ended`);


// This is a simple example of synchronous code. The second call to `synchronousTask()` will not start until the first one is completed, which can lead to delays in execution if the task takes a long time.
// In this case, the loop will block the execution of the next line of code until it is completed, which can lead to delays in execution if the task takes a long time.








































