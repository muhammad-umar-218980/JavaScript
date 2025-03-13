/*

splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

Syntax:
array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

OR

array.splice(start, deleteCount, item1, item2, ...);

🔴 1️⃣ If Only start is Provided
✔ Works like slice(start), but modifies the original array.
✔ Removes all elements from start index to the end.
✔ Returns the removed portion.


🔴 2️⃣ If start and deleteCount are Provided
✔ Removes exactly deleteCount elements starting from start.
✔ Returns the removed elements as an array.
✔ Original array shrinks accordingly.


🔴 3️⃣ If start, deleteCount, and items... are Provided
✔ Removes deleteCount elements from start index.
✔ Inserts new items... at the same position.
✔ Returns removed elements.


🔴 4️⃣ If deleteCount is 0 (Only Insert)
✔ Inserts new elements at start without removing anything.
✔ Returns an empty array since no elements are deleted.


🔴 5️⃣ If deleteCount is Greater than Available Elements
✔ Removes all elements from start to the end.


🔴 6️⃣ If start is Negative
✔ Counts from the end (-1 is the last element).
✔ Works the same way as positive start, but from the right.



📝If:
✔ deleteCount === number of new items → Array size remains unchanged
✔ deleteCount > number of new items → Array size decreases
✔ deleteCount < number of new items → Array size increases
*/


// Example 1: Removing Elements from an Array using splice() by providing start only 

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let removed = arr.splice(2); // Removes all elements starting from index 2
console.log(arr); // [1, 2]
console.log("Removed items :",removed); // [3, 4, 5, 6, 7, 8, 9, 10]




// Example 2: Removing Elements from an Array using splice() by providing start and deleteCount

arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
removed = arr.splice(2, 3); // Removes 3 elements starting from index 2
console.log(arr); // ['a', 'b', 'g', 'h', 'i', 'j']
console.log("Removed items :",removed); // ['c', 'd', 'e']



// Example 3: Removing and Inserting Elements using splice() by providing start, deleteCount, and items

arr = [10 ,20 , 30 , 40 ,50]
removed = arr.splice(2, 2, 100, 200); // Removes 2 elements starting from index 2 and inserts 100, 200
console.log(arr); // [10, 20, 100, 200, 50]
console.log("Removed items :",removed); // [30, 40]


// Example 4: Inserting Elements using splice() by providing start, deleteCount as 0

arr = [1, 2, 3, 4, 5];
removed = arr.splice(arr.length, 0, 6, 7); // Inserts 6, 7 at index 5 without removing anything

// OR 

// removed = arr.splice(5, 0, 6, 7); 
console.log(arr); // [1, 2, 3, 4, 5, 6, 7]
console.log("Removed items :",removed); // []



// Example 5 : If deleteCount is Greater than Available Elements

arr = ['w', 'x', 'y', 'z'];
removed = arr.splice(2, 10); // Removes all elements starting from index 2
console.log(arr); // ['w', 'x']	
console.log("Removed items :",removed); // ['y', 'z']



// Example 6: Using Negative start

arr = ['a', 'b', 'c', 'd', 'e'];
removed = arr.splice(-1,3); // try to remove 3 elements starting from the last element but only one element 'e' is there so it will remove only one element
console.log(arr); // ['a', 'b', 'c', 'd']
console.log("Removed items :",removed); // ['e']
