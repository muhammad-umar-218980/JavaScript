/**
 * concat() method is used to join two or more strings.
 * This method does not change the existing strings, but returns a new string containing the text of the joined strings.
 * accept any number of arguments.
 */

let firstName = "Muhammad";
let lastName = "Umar";

let fullName = firstName.concat(" ", lastName);  // "Muhammad Umar"

console.log(`First Name: ${firstName}`);
console.log(`Last Name: ${lastName}`);
console.log(`Full Name (concat): ${fullName}`);


/*
Alternative way to concat strings

using + operator OR template literals
*/

let fullName1 = firstName + " " + lastName;  // Using +
let fullName2 = `${firstName} ${lastName}`;  // Using Template Literals

console.log(`Using +: ${fullName1}`);
console.log(`Using Template Literals: ${fullName2}`);



/*
=> TEMPLATE LITERALS ARE THE BEST WAY TO CONCAT STRINGS
=> TEMPLATE LITERALS ARE MORE READABLE AND EASY TO USE
 */

