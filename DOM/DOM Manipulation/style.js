/*

🔹 Styling Elements in JavaScript

The style property in JavaScript allows you to dynamically modify CSS properties of an HTML element.


The properties of the style object are camelCase versions of the CSS properties. For example, background-color in CSS becomes backgroundColor in JavaScript.

background-color: #f0f0f0;  ->  backgroundColor: "#f0f0f0";

*/


// 1. element.style.property = value

// The style property will overwrite any existing inline styles on the element.

let btn = document.querySelector("#btn");
btn.removeAttribute("disabled");

// Change styles
btn.style.color = "white";
btn.style.backgroundColor = "blue";
btn.style.padding = "10px";
btn.style.fontSize = "18px";








// 2. element.style.cssText

// The cssText property allows you to set multiple CSS properties at once.
// It is useful when you want to set multiple CSS properties at once.


btn.style.cssText = "color: white; background-color: red; padding: 15px; border-radius: 5px;";
// The cssText property will overwrite any existing inline styles on the element.


