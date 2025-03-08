/*

for...of loop

Used to iterate over values of an iterable object (like arrays, strings, maps, sets, etc.).
Works with arrays, strings, maps, and sets.

===> DOES NOT WORK WITH OBJECTS BECAUSE OBJECTS ARE NOT ITERABLE.

Syntax:
for (let value of iterable) {
    code to execute
}

*/ 

const numbers = [10, 20, 30];

for (let num of numbers) {
    console.log(num);
}


const Name = "Umar";

for (let char of Name) {
    console.log(char);
}
