/*

Callback hell is a term used to describe the situation when multiple nested callbacks are used in JavaScript, making the code difficult to read and maintain. It often occurs when dealing with asynchronous operations, such as API calls or file I/O.


🟢 To avoid callback hell following techniques are used :

1. Promises: Promises are a way to handle asynchronous operations in a more manageable way. They allow you to chain multiple asynchronous operations together, making the code easier to read and maintain.

2. Async/Await: Async/await is a syntactic sugar built on top of promises. It allows you to write asynchronous code that looks synchronous, making it easier to read and understand.

*/





















// Example of Callback Hell

function getData(dataId) {
	setTimeout(() => {
		console.log(`Data for id ${dataId} fetched`);
	}, 1000);
}

// If we want to fetch data in a way that we have to get data for first then for second and then for third we cannot do it like this 

// getData(1);
// getData(2);
// getData(3);

// because the above code will not wait for the first data to be fetched before fetching the second and third data and all the data will be fetched at the same time.
















// So we have to use callback hell to make sure that the data is fetched in the order we want.



console.log(`\nUsing Callback Hell \n`)

function getData(dataId, callbackFunc) {
	setTimeout(() => {
		console.log(`Data for id ${dataId} fetched`);
		if (callbackFunc) {
			callbackFunc(); 
		}// we have used if block to check if the callback function is passed or not because at the last we are not passing any callback function so we have to check if the callback function is passed or not.
	}, 4000);
}


console.log(`Fetching data for id 1 .........`);
getData(1 , () => {
	console.log(`Fetching data for id 2 .........`);
	getData(2 , () => {
		console.log(`Fetching data for id 3 .........`);
		getData(3 , () => {
			console.log("All data fetched");
		});
	});
}); 

// Similarly we can pass as many callback functions 
// as we want but it will make the code more complex and difficult to read and maintain as there will be more nested callbacks and it will be difficult to understand the flow of the code.




// we cannot do like this  🔽
/*

getData(1 , getData(2 , getData(3))); because in callback functions we cannot pass a function with () so instead we have to use arrow function or function expression to pass the function as a callback.

*/




















// Example 2 of Callback Hell


// Example of Callback Hell

function step1(callback) {
	console.log("Step 1: Start");
	setTimeout(function () {
		console.log("Step 1: Done");
		callback(); // Proceed to next step
	}, 1000);
}

function step2(callback) {
	console.log("Step 2: Start");
	setTimeout(function () {
		console.log("Step 2: Done");
		callback(); // Proceed to next step
	}, 1000);
}

function step3(callback) {
	console.log("Step 3: Start");
	setTimeout(function () {
		console.log("Step 3: Done");
		callback(); // Proceed to next step
	}, 1000);
}

function step4(callback) {
	console.log("Step 4: Start");
	setTimeout(function () {
		console.log("Step 4: Done");
		callback(); // Final step
	}, 1000);
}

step1(function () {
	step2(function () {
		step3(function () {
			step4(function () {
				console.log("All steps are done!");
			});
		});
	});
});















































/*

🔴 IMPORTANT NOTE :
We use callback everywhere in JS , but when you see that there is callback hell in your code then try to implement promises or async/await to make the code more readable and maintainable.

*/