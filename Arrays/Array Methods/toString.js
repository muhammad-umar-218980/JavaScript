/*

toString() method is used to convert an array to a string of comma separated values.

=> It does not change the original array.

=> It joins elements using a comma (,) by default.

*/	

let fruits = ["Apple", "Banana", "Mango", "Orange"];
let fruitsString = fruits.toString();
console.log(fruitsString); // ✅ Apple,Banana,Mango,Orange


// fruitsString is a string now and now we will convert it back to an array
// using spread operator
let stringArray = [...fruitsString];
console.log(stringArray);


let numbers = [1, 2, 3, 4, 5];
console.log(numbers.toString()); // ✅ 1,2,3,4,5

