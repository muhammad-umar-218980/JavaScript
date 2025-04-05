/*

In JavaScript, error handling is done using the try, catch, finally, and throw keywords.

*/




// 1️⃣ try block
// The try block contains the code that might throw an error. If an error occurs, the control will jump to the catch block.


try {
	// Code that may throw an error
	let result = riskyFunction();
} catch (error) {
	// Handle the error
	console.log("An error occurred:",error.message);
}












// 2️⃣ catch block
// The catch block is executed if an error occurs in the try block. It receives the error object as a parameter.
// You can use this block to handle the error gracefully and provide feedback to the user or log the error.
// The catch block is used to handle the error. It accepts an argument, typically named error, that holds the details of the caught exception.

try {
	// Code that may throw an error
	let result = riskyFunction();
}
catch (error) {
	// Handle the error
	console.log("An error occurred:",error.message);
}















// 3️⃣ finally block
// The finally block is always executed, regardless of whether an error was thrown or not. It's useful for cleanup code, like closing files or network connections.



try {
	let file = openFile('file.txt');
	let data = file.read();
} catch (error) {
	console.log("An error occurred:", error.message);
} finally {
	console.log("This will always run.");
}



































// 4️⃣ throw statement
// The throw statement allows you to create custom errors. You can throw an error object or a string message.
// You can manually throw an error using the throw statement. This can be used for custom error handling.


function validateAge(age) {
	if (age < 0) {
		throw new Error("Age cannot be negative");
	}
	console.log("Age is valid");
}

try {
	validateAge(-5);
} catch (error) {
	console.log("Caught an error:", error.message);
}
