//Alert
// we can also use alert() instead of window.alert()
window.alert("Hello, this is an alert!");

//Prompt
// we can also use prompt() instead of window.prompt()
let fullName = window.prompt("Enter your name:", "Muhammad Umar");
console.log("User entered:", fullName);

//Confirm
// we can also use confirm() instead of window.confirm()
let isConfirmed = window.confirm("Are you sure you want to delete this?");
if (isConfirmed) {
  console.log("User confirmed the action.");
} else {
  console.log("User canceled the action.");
}



//combining all these three methods
alert("Welcome to our website!");

let username = prompt("Enter your name:");
if (username) {
  let confirmAction = confirm(`Hello, ${username}! Do you want to continue?`);
  if (confirmAction) {
    console.log("User wants to continue.");
  } else {
    console.log("User canceled.");
  }
}
