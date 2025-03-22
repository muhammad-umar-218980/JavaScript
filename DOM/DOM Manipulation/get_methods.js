/*

JavaScript provides methods to retrieve elements from the DOM based on ID, class, or tag name.

There are several methods to select elements from the DOM:

1. document.getElementById()
2. document.getElementsByClassName()
3. document.getElementsByTagName()


*/



/*

1. document.getElementById()

The document.getElementById() method returns an element by its ID. It is a case-sensitive method and returns the first element with the specified ID.

🔹 Selects an element by its id.
🔹 Returns a single element(because id is unique).

*/

const title = document.getElementById("myTitle");
console.log(title.innerText); // Outputs: Hello, World!

title.innerText = title.innerText + " I'm learning JavaScript!";
console.log(title.innerText); // Outputs: Hello, World! I'm learning JavaScript!







/*

2. document.getElementsByClassName()

🔹 Selects elements by their class name.
🔹 Returns an HTMLCollection (a list of elements) which is similar to an array but has some differences.
🔹 You must use indexing ([0], [1], etc.) or a loop to access multiple elements.

*/



const texts = document.getElementsByClassName("text");
console.log(texts[0].innerText); // Outputs: First paragraph
console.log(texts[1].innerText); // Outputs: Second paragraph
console.log(texts.length); // Outputs: 2


for (let i = 0; i < texts.length; i++) {
	console.log(texts[i].innerText);
}





/*

3. document.getElementsByTagName()

🔹 Selects elements by their tag name (like p, div, h1).
🔹 Returns an HTMLCollection (a list of elements) which is similar to an array but has some differences.

*/

const heading = document.getElementsByTagName("h5");
console.log(heading.length); // Outputs: Number of <p> elements
console.log(heading[0].innerText); 