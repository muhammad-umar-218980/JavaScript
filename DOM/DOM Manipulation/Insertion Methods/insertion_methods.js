/*


🔹 DOM Manipulation: Adding & Removing Elements

JavaScript provides methods to insert, move, and delete elements in the DOM dynamically.


*/

/*
First we need to create an element to insert

SYNTAX:
let element = document.createElement('tag_name');


*/

// Example:
let paragraph = document.createElement('p'); // Create a new paragraph element



// Now we can insert the element into the DOM using the following methods:


//1. node.append( el ) 

// adds at the end of node (inside)

let container = document.getElementById("container");

let newDiv = document.createElement("div");

newDiv.textContent = " World!";
container.append(newDiv);

/*

container:

<div id="container">
        Hello
	<div> World!</div>
</div>

*/




//2. node.prepend( el )
// adds at the beginning of node (inside)

let container1 = document.querySelector("#container1");

let newDiv1 = document.createElement("div");

newDiv1.textContent = "Hello";
container1.prepend(newDiv1);


/*

container1:

div id="container1">
	<div> Hello</div>
	World!
</div>

*/




//3. node.before( el )
// adds before the node

let container2 = document.querySelector("#container2");

let newDiv2 = document.createElement("div");

newDiv2.textContent = "Hello I'm before";
container2.before(newDiv2);

/*

container2:

<div> Hello I'm before</div>
<div id="container2">
	Hello
	World!
</div>

*/





// 4. node.after( el )
// adds after the node

let container3 = document.querySelector("#container3");

let newDiv3 = document.createElement("div");

newDiv3.textContent = "Hello I'm after";
container3.after(newDiv3);


/*

container3:

<div id="container3">
	Im container 3
</div>
<div> Hello I'm after</div>

*/






// 5. node.remove()
// removes the node

let removeDiv = document.querySelector("#remove");

removeDiv.remove();