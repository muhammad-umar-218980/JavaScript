/*

Arrow functions are a concise way to write funcs using the => (arrow) syntax

*/

function sum(x,y){
	return x + y;
}

let NormalSum = sum(121,978);
console.log(NormalSum);


// Using Arrow Function

/*

(a,b) => {
	return a + b;
}

*/

// this is arrow function but to use it we need to store it in a variable


let ArrowSum = (a,b) => {
	return a + b;
}

console.log(ArrowSum);
//Output:
/*

(a,b) => {
	return a + b;
}

*/

let sum1 = ArrowSum(5357,253);
console.log(sum1);

// OR 
// ⬇ Below is a compact way if we have to write a returning func of one line only

ArrowSum = (a,b) => a+b;

console.log(ArrowSum);
//Output
/*

(a,b) => a+b

*/

sum1 = ArrowSum(456,7356);
console.log(sum1);




// Example 2 

function Hello(){
	console.log("Hello");
}

Hello(); // Hello
Hello("Umar") // Hello

let HelloFunc = () => {
	console.log("Hello from Arrow Function");
}

HelloFunc();
// OR

HelloFunc = () => console.log("Hello from Arrow Func 2");
HelloFunc();





// using one parameter
function square(x) {
	return x * x;
}

let ans = square(100);
console.log(ans);

let sq = (x) =>{
	return x * x ;
}

//OR 
/*

let sq = x =>{
	return x * x ;
}

*/
ans = sq(76);
console.log(ans);

sq = x => x * x;

ans = sq(356798);
console.log(ans);




