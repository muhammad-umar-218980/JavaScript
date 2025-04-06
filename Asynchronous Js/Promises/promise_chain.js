function asyncFunc1(){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			console.log(`Data 1 `);
			resolve(`Success`);
		}, 4000);
	});
}

function asyncFunc2(){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			console.log(`Data 2 `);
			resolve(`Success`);
		}, 4000);
	});
}


/*

If we want to get Data1 then Data2 one after another we cannot create like this 

console.log(`Fetching Data 1 ..........`);
let p1 = asyncFunc1();
p1.then((res)=>{
	console.log(res);
});

console.log(`Fetching Data 2 ..........`);
let p2 = asyncFunc1();
p2.then((res)=>{
	console.log(res);
});


As we can see that the above code is not waiting for the first data to be fetched before fetching the second data and all the data will be fetched at the same time. So we have to use promise chaining to make sure that the data is fetched in the order we want.

*/
















// Promise Chaining 
// For the above code we can use promise chaining to make sure that the data is fetched in the order we want.

/*

console.log(`Fetching Data 1 ..........`);
let p1 = asyncFunc1();
p1.then((res)=>{
	console.log(`Fetching Data 2 ..........`);
	let p2 = asyncFunc2();
	p2.then((res)=>{
		console.log(`All Data fetched`);
	});
});

*/

// By using the above code we can make sure that the data is fetched in the order we want. 

// We can make the code more shorter by directly chaning the .then in asyncFunc without creating extra variables p1 and p2 

/*

console.log(`Fetching Data 1 ..........`);
asyncFunc1().then((res)=>{
	console.log(`Fetching Data 2 ..........`);
	asyncFunc2().then((res) => {
		console.log(`All Data fetched`);
	});
});

*/




























// Example 2 

function getData(dataId) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log(`Data for id ${dataId} fetched`);
			resolve(`success`)
		}, 5000);
	});
}

/*

let data1 = getData(1);
data1.then((res)=>{
	console.log(res);
});

*/

// OR directly using the function without creating a variable

/*

console.log(`Fetching data for id 1 .........`);
getData(1).then(()=>{
	console.log(`Fetching data for id 2 .........`);
	getData(2).then(()=>{
		console.log(`Fetching data for id 3 .........`);
		getData(3).then((res)=>{
			console.log(res);
		})
	});
});

*/


// This works fine but as the number of async calls increase the code will become more and more complex and unreadable. So instead of calling the function again and again we can use promise chaining and return the function itself in the .then block.












// 🟢 Real Promise Chaining
// For the above code we can also use actual promise chaining by returning the function itself in the .then block.


console.log(`\nUsing Promise Chaining \n`);

console.log(`Fetching data for id 1 .........`);

getData(1).then(()=>{
	console.log(`Fetching data for id 2 .........`);
	return getData(2);
}).then(()=>{
	console.log(`Fetching data for id 3 .........`);
	return getData(3);
}).then((result)=>{
	console.log(result);
	console.log("All data fetched");
}).catch((err)=>{
	console.log(err);
	console.log("Error fetching data");
})


// This is the actual promise chaining where we are returning the function itself in the .then block and it will make sure that the data is fetched in the order we want.