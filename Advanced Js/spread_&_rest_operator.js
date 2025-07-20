/*

🟢 Rest Operator :

The rest operator is used to get the rest of the elements in an array after the first few elements. 

It is denoted by the three dots (...) and is used in the function parameters.

*/

function sum(...vars){
	let sum = 0;
	for(i in vars){
		sum += vars[i];
	}
	console.log(sum);
}

sum(5,6,7);
sum(1,2,3,4,5,6,7,8,9);
sum();

// In this way we can pass multiple arguments to a function and get the rest of the arguments in an array.













// We can also pass arguments we dont want to collect 

function sum_Hello(name,...vars){
	console.log(`Hello ${name}`);
	let sum = 0;
	for(i in vars){
		sum += vars[i];
	}
	console.log(sum);
}

sum_Hello(`Umar`, 5,6,7);

// In this way we canalso pass the arguments we dont to collect in the function.

// function func(name,course,id,...args)




// 🔴 Use of Rest Operators in arrays 

let [first,...rest] =[1,2,3,4];

console.log(first);
console.log(rest);



// 🔴 Use of Rest Operator in objects

let {name,...details} = {
	name: 'Umar', 
	age: 20, 
	gender: `Male`
}

console.log(name);
console.log(details);


// ✅ This is called Destructuring assignment in JavaScript. It is used to unpack values from arrays or objects into distinct variables


































































/*

🟢 Spread Opeator :

It expands an array or object into its elements/oproperties

It is denoted by the three dots (...) and is used in the function call and array destructuring.


*/


let sum_func = (name , ...vars) =>{
	console.log(`Hello ${name}`);
	let sum = 0 ;
	for(let i = 0 ; i < vars.length ; i++){
		sum += vars[i];
	}

	console.log(sum);
}

let arr = [8,9,5,1];

// If we pass the arr in the function for ...vars it will concatenate all the elements of array to string and the output will be

// sum_func(`Umar` , arr);
// Output : 08,9,5,1


// So we have to use spread operator to pass the array elements as separate arguments to the function

sum_func(`Ali` , ...arr); // Output : Hello Ali 23





// Example 2 

let arr1 = [7,9,4,1,6];

console.log(...arr1); //Output : 7 9 4 1 6 because it will treat the elements of array as a single element


console.log([...arr1]) // Output : [7, 9, 4, 1, 6] Now it will treat as array

















// Example 3

let arr2 = arr1;
arr1.push(56);

console.log(arr2); // Output : [7, 9, 4, 1, 6, 56] because arr2 = arr1 does not create a new array it just copies the reference of arr1 to arr2 . So both array points to same memory location 

// Thatys why by pushing any value in arr1 it will also be reflected in arr2


// ✅ To avoid this problem we use spread operator 


let arr3 = [...arr1];
arr1.push(87);

console.log(arr3); // Output : [7, 9, 4, 1, 6 , 54] because arr3 is a new array created by spread operator so pushing any value in arr1 will not affect arr3






















// Concatenating two or more  arrays 

let arr4 = [...arr,...arr1];
console.log(arr4); // Output : [8, 9, 5, 1, 7, 9, 4, 1, 6, 56, 87]


// Similarly we can concat as many arrays as we want and also pass some additional values

let arr5 = [97,51,{name : `Usman`} , ...arr , [43,75]];

console.log(arr5);










// Concatenating Two or more objects 

let obj1 = {name : `Abu Bakar`};
let obj2 = {age : 25};

let obj3 = {...obj1 , ...obj2};

console.log(obj3); // Output : name: 'Abu Bakar', age: 25}

let obj4 = {...obj2, city: `karachi` , id : 101 , ...obj1};  

console.log(obj4) // Output : {age: 25, city: 'karachi', id: 101, name: 'Abu Bakar'}


