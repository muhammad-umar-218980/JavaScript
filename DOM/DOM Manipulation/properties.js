/*

DOM Manipulation - Key Properties
These four properties are used to get or change content inside DOM elements after selecting them using get or query selectors.

*/

/*

1. tagName

🔹 Works only on element nodes (not text or comments).

🔹 Returns the tag name in UPPERCASE.
*/

let element = document.querySelector(".box");
console.log(element.tagName); // Output: "DIV"

let button = document.querySelector("button");
console.log(button.tagName); // Output: "BUTTON"




/*

2. innerHTML

🔹 Returns everything inside the element, including HTML tags.

🔹 When setting, it replaces all inner content with new HTML.

*/


let div = document.getElementById("content");
console.log(div.innerHTML); // Output: "<p>Hello <b>World</b></p>"

div.innerHTML = "<h2>New Content</h2>"; // Changes content
console.log(div.innerHTML); // Output: "<h2>New Content</h2>"






/*

3. innerText

🔹 Ignores hidden elements (display: none;).
🔹 When setting, it removes all inner HTML and replaces it with plain text.

*/


div = document.getElementById("demo");
console.log(div.innerText); // Output: "Hello World!" (ignores hidden text)





/*

4. textContent

🔹 Includes hidden text (display: none;).

🔹 Does NOT interpret HTML, returns it as plain text.


*/

div = document.getElementById("demo");
console.log(div.textContent); // Output: "Hello Hidden World!"









// ANOTHER EXAMPLE

div = document.querySelector("#fruits");

console.log(div.innerHTML); // Output: "<h3>Fruits</h3> <ul> <li>Apple</li> <li>Mango</li> <li>Banana</li </ul>"

console.log(div.innerText); // Output: "Fruits Apple Mango Banana"




/*

firstChild & lastChild

🔹 These properties return the first and last child nodes of an element, respectively.

🔹 They include text nodes, comments, and other elements.


If you want to get the first or last element node only, use:
✔️ firstElementChild
✔️ lastElementChild

*/




let parent = document.getElementById("parent");

console.log(parent.firstChild);  // Output: Hello
console.log(parent.lastChild);   // Output: #text (because of whitespace)






/*

firstElementChild & lastElementChild

🔹 These properties return the first and last child elements of an element, respectively.

🔹 They ignore text nodes, comments, and other non-element nodes.


*/




parent = document.getElementById("parent");

console.log(parent.firstElementChild); // Output: <p>First Element</p>
console.log(parent.lastElementChild);  // Output: <p>Last Element</p>
