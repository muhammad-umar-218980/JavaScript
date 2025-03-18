function PrintTable(num,end){
	for(let i = 1 ; i <= end ; i++){
		console.log(`${num} x ${i} = ${num * i}`);
	}
}

let n = prompt("Enter any number to print table of ");
n = Number(n);
let end = prompt("Enter the range of table");
end = Number(end);

PrintTable(n,end);


/*

prompt() always return a string to convert to number use the following :

1. Number(param)
2. parseInt(param)
3. parseFloat(param)
4. + 

*/

let num = prompt("Enter number 1 :");
num = Number(num);
console.log(num, typeof num);
/*

✅ Converts "10" → 10
✅ Converts "10.5" → 10.5
❌ Converts "10abc" → NaN (Not a Number)
❌ Converts "abc" → NaN

*/


num = prompt("Enter integer 2 :");
num = parseInt(num);
console.log(num, typeof num);
/*

✅ Converts "10" → 10
✅ Converts "10.5" → 10 (Removes decimal part)
✅ Converts "10abc" → 10 (Stops at first non-numeric character)
❌ Converts "abc10" → NaN


*/


num = prompt("Enter decimal number 3 :");
num = parseFloat(num);
console.log(num, typeof num);
/*

✅ Converts "10" → 10
✅ Converts "10.5" → 10.5
✅ Converts "10.5abc" → 10.5 (Stops at first non-numeric character)
❌ Converts "abc10.5" → NaN

*/


num = +prompt("Enter number 4 :");
console.log(num, typeof num);
/*

✅ Converts "10" → 10
✅ Converts "10.5" → 10.5
❌ Converts "10abc" → NaN
❌ Converts "abc" → NaN

*/


num = +prompt("Enter number 5 :");

if (isNaN(num)) {
	console.log("Invalid number! Please enter a valid number.");
} else {
	console.log("Valid number:", num);
}



