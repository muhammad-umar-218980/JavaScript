function Hello(){
	console.log("Hello World");
}

Hello();// Hello World
Hello("Umar"); // Hello World
Hello("Umar", "Ali"); // Hello World

// Since we have not defined any parameters in the function, it will not throw any error even if we pass the arguments.




//🔴 HOISTING :
// We can also call the function before defining it.
// This is because of the concept of hoisting in JavaScript.
// Example below:

Greet("Umar"); // Hello Umar
// if we call the function with arguments then the argument will be passed to the function
Greet(); // Hello User 
// if we call the function without arguments then the default argument will be passed to the function
Greet("Ali","Umar" ,"Abu Bakar" , "Usman"); // Hello Ali

function Greet(name = "User"){
	console.log("Hello " + name);
}


// 🔴 NOTE : We can also store a function in a variable
// Example below:

let myFunction = function(){
	console.log("My Function !!");
}

myFunction(); // My Function !!

// we can also assign a new value to the variable
myFunction = 2 ;
console.log("MyFunction : ",myFunction); // 2

// We cannot call it before defining it.

/*

myFunction(); // My Function !!

let myFunction = function(){
	console.log("My Function !!");
}

This will throw an error because we are calling the function before defining it and hoisting does not work with this.

*/