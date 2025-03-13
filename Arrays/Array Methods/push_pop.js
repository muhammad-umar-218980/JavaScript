/*

push() - adds one or more elements to the end of an array 
Returns the new length of the array.
push() takes one or more arguments and adds them to the end of the array.

pop() - removes the last element from an array Returns that removed element
pop() only remove one and last element from the array.


*/

let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.push('f')); // 6
console.log(arr); // ['a', 'b', 'c', 'd', 'e', 'f']

let pushedItems = arr.push('g', 'h');
console.log(pushedItems); // 8
console.log(arr); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

// arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
console.log(arr.pop()); // h
console.log(arr); // ['a', 'b', 'c', 'd', 'e', 'f', 'g']
let poppedItem = arr.pop();
console.log(poppedItem); // g
console.log(arr); // ['a', 'b', 'c', 'd', 'e', 'f']
