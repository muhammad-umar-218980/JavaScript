/*

The slice(start, end) method extracts a portion of an array and returns a new array, without modifying the original one.

=> Returns a new array → Does not modify the original array.

=> Takes two arguments:
start → Index where extraction begins (inclusive)
end → Index where extraction stops (exclusive)
	=> If end is omitted, it slices till the end of the array.
	=> Supports negative indices → Counts from the end (-1 is the last element).

🔴NOTE : The slice(start,end) works on strings and arrays on same way 


*/

let numbers = [1, 2, 3, 4, 5];


let slicedNumbers = numbers.slice(1, 3);  // [2, 3] (index 1 to 2)
let lastThree = numbers.slice(-3);        // [3, 4, 5] (last 3 elements)
let middle = numbers.slice(2, -2);        // [3] (excluding first 2 & last 2)	
console.log(slicedNumbers); // [2, 3]
console.log(lastThree); // [3, 4, 5]
console.log(middle); // [3]
console.log(numbers); // [1, 2, 3, 4, 5] (original array)