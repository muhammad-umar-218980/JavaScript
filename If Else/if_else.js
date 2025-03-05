// if else 

let age = 18;

if (age >= 18) {
    console.log("You can vote! ✅");
} else {
    console.log("You are too young to vote. ❌");
}



// if else ladder

let score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: Fail");
}


// nested if else

let marks = 85;

if (marks >= 50) {
    console.log("You passed! 🎉");

    if (marks >= 80) {
        console.log("You got an A! 🏆");
    } else {
        console.log("You got a B.");
    }

} else {
    console.log("You failed. 😢 Try again!");
}


