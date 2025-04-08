/*

What is an API ?
An API (Application Programming Interface) is a set of defined rules that enables different applications to communicate with each other. 

API stands for Application Programming Interface.

In simple words:
👉 An API allows two software applications to talk to each other.



💡 Real-life Example:
Imagine you’re ordering food on a food delivery app:

The app (client) sends your order to the restaurant (server) using an API.

The restaurant replies with confirmation, also through the API.

So the API is like a waiter – taking your request to the kitchen and bringing the response back.






In web development:
You (the frontend) use APIs to get or send data from/to a backend server or third-party service like weather, maps, or chatbots.


*/


/*

🔹 What is the Fetch API?
The Fetch API is a modern JavaScript feature used to make HTTP requests (like GET, POST, etc.) to APIs or servers — and get/send data (usually in JSON format).

It’s like saying:
"Hey server, give me this data!"
Or
"Hey server, here’s some data I want to save!"




🔴 It uses Request and Response objects

🔴 The fetch() method is used to fetch a resource(data)

🔴 It returns a Promise that resolves to the Response object representing the response to the request.







🟢 SYNTAX:
let response = fetch(url, options);

url: The URL of the resource you want to fetch

options: An optional object containing any custom settings you want to apply to the request (like method, headers, body, etc.)


🔴 We usually use fetch API for the following common http methods:

1. GET: To retrieve data from a server.
2. POST: To send data to a server.
3. PUT: To update existing data on a server.
4. DELETE: To delete data from a server.



🟢🟢 The fetch() function returns a Response object. To convert the response body into a JavaScript object (if it's JSON), use the response.json() method.



🔴 By default fetch() uses GET method




*/


// EXAMPLE 1 : GET request using Fetch API

let URL = "https://meowfacts.herokuapp.com/"; // URL of the API

let btn = document.querySelector(".btn");
let btn2 = document.querySelector(".btn2");
let para = document.querySelector(".para");



let getFact = async () => {
	try {
		let response = await fetch(URL); // Fetch data from the API
		console.log(response); // log the response in JSON format


		let data = await response.json(); // Parse the JSON response
		console.log(data); // Log the data to the console
		console.log(data.data[0]); // Log the cat fact to the console
		// data.data[0] contains the actual cat fact


		para.innerText = data.data[0]; // Display the cat fact in the paragraph element


	} catch (error) {
		console.error("Error fetching cat fact:", error); // Log any errors
	}
}



btn.addEventListener("click", getFact);


// The above code can also be written using promise chains

function getFact1() {
	response = fetch(URL);

	response.then((response) => {
		return response.json();
	}).then((data) => {
		console.log(data);
		console.log(data.data[0])
		para.innerText = data.data[0];
	});
}

btn2.addEventListener("dblclick", getFact1);

// But this code is dificult to read thats why we mostly use async await


// 🔴 For basic get requets we only use URL in fetch() function without options object. But for post, put, delete requests we use options object with method property.








































// POST Request using fetch API

/*

🧠 What is a POST request ?
	A POST request is used to send data(like form input or JSON) to a server, usually to create or submit something.

For example:

Submitting a login form

Creating a new user or blog post

Sending a message

*/


/*

for POST requests we use both the parameters of fetch() function including url and options 


In options object set the method to 'POST' and the body to the data you want to send.

*/


// Example 

async function sendPostRequest() {
	const data = {
		title: 'My Second Post',
		body: 'Here is the post content.',
		userId: 2
	};

	const options = {
		method: 'POST', // HTTP method
		headers: {
			'Content-Type': 'application/json' // We're sending JSON
		},
		body: JSON.stringify(data) // Convert JS object to JSON string
	};

	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/posts', options);

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const result = await response.json();
		console.log('Response from server:', result);
	} catch (error) {
		console.error('Error:', error);
	}
}

sendPostRequest();


// 🔴 EXPLANATION OF CODE

/*

✅ const data = { ... }
We create a JavaScript object named data containing the info we want to send to the server.

{
	title: 'My Second Post',
	body: 'Here is the post content.',
	userId: 2
}
🔸 This will be the payload (data we send with POST request).





✅ const options = { ... }
We define the settings/config for our fetch request.

{
	method: 'POST', // HTTP method
	headers: {
		'Content-Type': 'application/json' // We're sending JSON
	},
	body: JSON.stringify(data) // Convert JS object to JSON string









✅ const response = await fetch(URL, options);
fetch() sends the request to the API (https://jsonplaceholder.typicode.com/posts)

It uses the options we defined.

await waits for the server to respond.

The result is stored in response.
}






✅ if (!response.ok) { throw new Error(...) }
.ok is true if the response was successful (status 200–299).

If not, we throw an error to be caught later.





✅ const result = await response.json();
We parse the response body from JSON string to a JS object.

Store it in result.






✅ console.log('Response from server:', result);
We print the server’s response to the console.





✅ } catch (error) { console.error('Error:', error); }
If any part of the try block fails (e.g. fetch fails or response is not ok), this catch block handles it.





✅ sendPostRequest();
Finally, we call the function to actually run it.

*/


/* 🔴🔴 NOTE :

✅ 'Content-Type': 'application/json'
This is correct JavaScript syntax.

We’re creating a JavaScript object (like a dictionary), and object keys in JavaScript must either be:

Without quotes (if it's a valid identifier):
Example: name: "Umar"

Or in quotes (usually for keys with special characters or dashes -):
Example: 'Content-Type': 'application/json'





'Content-Type': ✔️ Correct JS object key with quotes because it has a dash (-)

Content-Type: ❌ Not valid as a JS object key without quotes


*/ 