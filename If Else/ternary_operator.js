let num = 10;
let result = (num % 2 === 0) ? "Even" : "Odd";

console.log(result);


// same as 

if (num % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

//  ---------------------------------------------------------------

let age = 18;
let canVote = (age >= 18) ? "You can vote! 🗳️" : "You cannot vote yet! ❌";

console.log(canVote);


// ---------------------------------------------------------------

let temp = 30;
console.log(temp > 25 ? "Hot 🔥" : "Cold ❄️");


// nested ternary operator

let marks = 85;
let grade = (marks >= 90) ? "A" :
            (marks >= 80) ? "B" :
            (marks >= 70) ? "C" :
            "Fail";

console.log(grade);

// same as

if (marks >= 90) {
    console.log("A");
} else if (marks >= 80) {
    console.log("B");
} else if (marks >= 70) {
    console.log("C");
} else {
    console.log("Fail");
}
