/*
for...in loop
Used to iterate over the keys (property names) of an object.
Works with objects and arrays, but primarily used for objects.

Syntax:
for (let key in object) {
     code to execute
}
*/

const student = {
    name: "Umar",
    age: 18,
    course: "BSCS"
};

for (let key in student) {
    console.log(key, ":", student[key]);  // Prints keys and values
}



/*
Using for...in with Arrays - Not Recommended
for...in should not be used with arrays because it iterates over keys (indices) instead of values and may include inherited properties.
*/

const numbers = [10, 20, 30];

for (let index in numbers) {
    console.log(index, ":", numbers[index]);
}

