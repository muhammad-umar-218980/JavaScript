let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    default:
        console.log("Invalid day");
}

// Output: Wednesday

// ------------------------------

let grade = "B";

switch (grade) {
    case "A":
        console.log("Excellent! 🎉");
        break;
    case "B":
        console.log("Good job! 👍");
        break;
    case "C":
        console.log("You can do better! 😃");
        break;
    default:
        console.log("Invalid grade");
}

// Output: Good job! 👍

// ------------------------------

let marks = 85;

switch (true) {  // Using true as the switch expression
    case (marks >= 90):
        console.log("Grade: A");
        break;
    case (marks >= 80):
        console.log("Grade: B");
        break;
    case (marks >= 70):
        console.log("Grade: C");
        break;
    default:
        console.log("Fail 😢");
}

// Output: Grade: B