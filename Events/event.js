/*

Events are actions or occurrences that happen in the browser and can be detected using JavaScript.

They are triggered when a user interacts with a webpage (e.g., clicking a button, typing in a field , submitting a form , etc.) or when a webpage loads or unloads.


🔴 Types of Events :

Mouse Events – click, dblclick, mouseover, mouseout, mousedown, mouseup

Keyboard Events – keydown, keyup, keypress

Form Events – submit, change, focus, blur

Window Events – load, resize, scroll, print

Clipboard Events – copy, cut, paste

*/


/*

There are multiple ways to handle events in JavaScript:

1. Inline HTML event handlers

2. Assigning event handlers using the element node

3. Using the addEventListener() method



NOTE:

▶▶▶ Js Handlers have higher priority than HTML handlers.

Inline HTML event handlers are not recommended because they mix HTML with JavaScript, which makes the code harder to read and maintain.

*/


// 1. Inline HTML event handlers (Defined in HTML)



// 2. Assigning event handlers using the element node

// Its drawback is that it can only assign one event handler per event type.

// If you assign a new event handler to an event type that already has an event handler, the new event handler will replace the existing event handler.

/*

node.event = ( ) => {
	code
}

*/

// first we need to select the element node
let nodeBtn = document.querySelector("#nodeBtn");

nodeBtn.onclick = () => {
	console.log("Node Button Clicked");
}

// OR using function

nodeBtn.ondblclick = function(){
	console.log("Node Button Double Clicked");
}


// 🔴 Event Object

/*

The event object is passed to the event handler as an argument, and it contains information about the event that occurred.

All event handlers have access to the Event Object's properties and methods.

node.event = (e) => {
	handle here
}
e.target, e.type, e.clientX, e.clientY


we can name the argument anything, but it is a common practice to name it e or event.

*/

nodeBtn.onmouseover = (e) => {
	console.log(`Hi Im Event Object : ${e}`);
	console.log(e.target);
	console.log(e.type);
	console.log(e.clientX);
	console.log(e.clientY);
}












// 3. Using the addEventListener() method

/*

Event listeners are used to handle events (such as clicks, keypresses, mouse movements, etc.) in JavaScript.

The best way to attach event handlers to elements is by using the addEventListener() method.

🔴🔴 The addEventListener() method allows you to add multiple event handlers to the same event, without overwriting existing event handlers.



SYNTAX:
	element.addEventListener(event, callback);


element → The HTML element to which you are attaching the event.

event → The name of the event (e.g., "click", "mouseover", "keydown").

callback → The function that will execute when the event occurs and it is also called EVENT HANDLER.

*/


let listenerBtn = document.querySelector("#listenerBtn");

listenerBtn.addEventListener("click", () => {
	console.log("Listener Button Clicked");
});

// OR 

function func1(){
	alert("Listener Button Clicked using function ");
}

listenerBtn.addEventListener("dblclick", func1);

// We can also print the event object


function printEvent(e){
	console.log(e);
}

listenerBtn.addEventListener("mouseover", printEvent);



// 🔴 Removing Event Listener

/*

To remove an event listener, use the removeEventListener() method.

But the reference should be the same as the reference used in addEventListener() and we have to make a separate function for that. and pass it in the callback without writing the whole function in the callback. 


listenerBtn.removeEventListener("click", () => {
	console.log("Listener Button Clicked");
}); WRONG ❌


make a separate function and pass it in the callback ✅

SYNTAX:
	element.removeEventListener(event, callback);

*/


let removeBtn = document.querySelector("#removeBtn");

function removeFunc(){
	alert("Remove Button Clicked");
};

removeBtn.addEventListener("click", removeFunc);

// Now we can remove the event listener

removeBtn.removeEventListener("click", removeFunc);





// We can also add the removeEventListener() method inside the event handler to remove the event listener after the first click.


let removeBtn2 = document.querySelector("#removeBtn2");


function removeFunc2(){
	alert("Remove Button 2 Clicked");
	removeBtn2.removeEventListener("click", removeFunc2);
};

removeBtn2.addEventListener("click", removeFunc2);