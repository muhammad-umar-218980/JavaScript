/*

shift() - Removes the first element from an array .

=> It does not take any arguments.
=> Returns the removed element.
=> Changes the length of the array.
=> Modifies the original array.
=> If the length of the array is 0, then it returns undefined.

NOTE : shift() method is same as pop() method, but it removes the first element from the array.

Syntax:
let element = arr.shift();

*/

let arr = [1, 2, 3, 4, 5];
let removed = arr.shift();
console.log("Removed element : " + removed); // 1
console.log(arr); // [2, 3, 4, 5]

arr = ['z','a', 'b', 'c', 'd', 'e'];
console.log("Removed element : " + arr.shift()); // z
console.log(arr); // [a, b, c, d, e]



/*

unshift() - Adds one or more elements to the beginning of an array.

=> It takes one or more arguments.
=> Returns the new length of the array.
=> Modifies the original array.
=> Changes the length of the array.

NOTE : unshift() method is same as push() method, but it adds the elements to the beginning of the array.

Syntax:
let newLength = arr.unshift(element1, element2, ...);


*/

console.log("\nUnshift method : \n\n");

arr = [2, 3, 4, 5];
let newLength = arr.unshift(1);
console.log("New length : " + newLength); // 5
console.log(arr); // [1, 2, 3, 4, 5]

arr = ['b', 'c', 'd', 'e'];
console.log("New length : " + arr.unshift('a')); // 5
console.log(arr); // [a, b, c, d, e]