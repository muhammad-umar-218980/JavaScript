/*

Async await is a modern JavaScript feature that allows you to write asynchronous code in a more synchronous manner. It is built on top of Promises and makes it easier to work with asynchronous operations, such as fetching data from an API or reading files.


🔴 Functions can be made Asynchronous by using the async keyword 

🟢 An async function always return a promise , even if you don't explicitly return one.

*/

// Example of async function

async function Hello(){
	console.log("Hello World");
}

Hello(); // Hello World and it also returns a promise



















/*

await is used to wait for a promise to resolve or reject.  When you use await, the execution of the async function is paused until the promise is resolved or rejected.

🔴 NOTE : 
- await can only be used inside an async function. You cannot use await at the top level of your code.
- If the promise is rejected, it will throw an error. You can handle this error using try...catch.

*/



// Example

function getWeather(city) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("Fetching weather data for " + city);

			setTimeout(() => {
				resolve(`Weather data for ${city} fetched successfully`);
			}, 2000);

		}, 3000);
	});
}

async function getAllWeatherData() {
	const result1 = await getWeather("New York");
	console.log(result1);

	const result2 = await getWeather("London");
	console.log(result2);
}

getAllWeatherData();

























// Example 2

function api(){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			console.log("Data fetched from API");
			resolve(`Success`);
		},2000)
	})
}


async function getAllData(){
	await api();
	await api();
	await api();
}

getAllData();
































// Example 3 

function getData(dataId) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log(`Data for id ${dataId} fetched`);
			resolve(`success`)
		}, 2000);
	});
}


async function getAllData1() {
	await getData(1);

	await getData(2);

	await getData(3);
}

// We need to manually call the function to execute it
// getAllData1();

// We can also use IIFE (Immediately Invoked Function Expression) to call the async function immediately


(async function getAllData1() {
	await getData(1);

	await getData(2);

	await getData(3);
})();
