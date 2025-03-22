/*

JavaScript query Methods for DOM Selection
JavaScript provides two powerful methods for selecting elements using CSS selectors:

1️⃣ document.querySelector() → Selects the first matching element.
2️⃣ document.querySelectorAll() → Selects all matching elements.

🔹 Both methods accept a CSS selector as an argument.

*/




// 1. document.querySelector()
/*

🔹 Selects the first element that matches the given CSS selector.
🔹 Returns a single element (even if multiple elements match).

🔴 NOTE : 
If no element is found, it returns null.

To get an element by its ID, use the # symbol followed by the ID name.

To get an element by its class name, use the . symbol followed by the class name.

To get an element by its tag name, use the tag name directly.

Write the id , class or tag name in quotes.

*/

let btn_2 = document.querySelector("button");

btn_2.style.backgroundColor = "blue";
btn_2.style.color = "white";




let button = document.querySelector("#btn1");

console.log(button); // Outputs: <button id="btn1">Button 1</button>
console.log(button.innerText); // Outputs: Button 1



let btn_1 = document.querySelector(".classBtn");

btn_1.style.backgroundColor = "red";
btn_1.style.color = "white";



let random = document.querySelector(".myClass");
console.log(random); // Outputs: null





// 2. document.querySelectorAll()
/*

🔹 Selects all elements that match the CSS selector.
🔹 Returns a NodeList (which is like an array).
🔹 You can use .forEach() to loop through the elements.


*/


let paras = document.querySelectorAll(".qPara");
paras.forEach(para => {
	para.style.color = "orange";
});


paras.forEach(para => {
	console.log(para.innerText);
});

console.log(paras); // Outputs: NodeList(3) [p.qPara, p.qPara, p.qPara]

// similarly we can use querySelectorAll() to select elements by their tag name and also by their id.