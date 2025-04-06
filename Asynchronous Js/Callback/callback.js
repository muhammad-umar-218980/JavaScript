/*

A callback is a function passed as an argument to another function.
This allows a function to call another function.

*/

let sum = (a,b) => a + b ;


function sumCallback(a,b,callbackFunc){
	return callbackFunc(a,b);
}

let Sum = sumCallback(5,8,sum); 
console.log(Sum); // 13

// OR 

console.log(sumCallback(5,8,sum)); // 13



// 🔴 dont pass the funnction with () because here function is passed as argument not function call

// if you pass the function with () it will return a typeError because it will try to execute the function and return the result of the function instead of passing the function itself as an argument.
// sumCallback(5,8,sum()); ❌ TypeError







// EXAMPLE 2
let add = function(a,b){
	console.log(a+b);
}

function addCallback(a,b,addCallback){
	addCallback(a,b);
}

addCallback(6,1,add); // 7

// Here addCallback is callback function














// EXAMPLE 3
// we can also directly pass an arrow function as an argument to another function


function multiply(a,b,callbackFunc){
	callbackFunc(a,b);
}


multiply(5,4,(a,b) => {
	console.log(a*b); // 20
});


















// CallBack using SetTimeout

// setTimeout is a built-in function in JavaScript that allows you to execute a function after a specified delay (in milliseconds).


let hello = () => {
	console.log("Hello World!");
}

setTimeout(hello, 2000); // Hello World! after 2 seconds



// OR 
// we can directly pass the arrow function as an argument to setTimeout


setTimeout(() => {
	console.log("Hello World! using direct arrow function!");
},4000);


