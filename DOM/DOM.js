console.log(window);
console.dir(window);
console.log(window.document); // OR console.log(document)
console.dir(window.document); // OR console.dir(document)


/*

console.log(obj): Prints the value of obj in a readable format. Used for debugging and viewing output.


console.dir(obj): Displays the properties and methods of obj in a structured way, useful for inspecting objects.



*/


const person = { name: "Umar", age: 20 };

console.log(person); // { name: "Umar", age: 20 }
console.dir(person); // Shows an expandable object with properties in the console




/*

window: Represents the browser window. It is the global object in JavaScript.
Example: window.alert("Hello!") shows an alert box.

document: Represents the web page (DOM) inside the window.
Example: document.title gets the page title.


Key Difference:

window contains the document.
document allows you to manipulate the webpage content.

*/




/*

What is DOM ?

The Document Object Model (DOM) is a tree-like structure that represents a web page inside the browser. It is a programming interface that allows JavaScript to interact with and manipulate HTML and CSS dynamically.

When a browser loads an HTML document, it creates a DOM tree, where each element in the document is represented as a node.

Window Object: A global object that represents the browser window and provides methods to manipulate the DOM.

*/



/*

What is Node ?

A node is an object that represents an element in the DOM tree. Each node has properties and methods

*/






// EXAMPLE


/*

<!DOCTYPE html>
<html>
  <head>
    <title>DOM Example</title>
  </head>
  <body>
    <h1 id="heading">Hello, DOM!</h1>
    <p class="text">This is a paragraph.</p>
  </body>
</html>




HOW THE BROWSER REPRESENTS IT AS A DOM TREE :

Document
 ├── <html>
 │    ├── <head>
 │    │    └── <title> "DOM Example" (Text Node)
 │    ├── <body>
 │    │    ├── <h1 id="heading"> "Hello, DOM!" (Text Node)
 │    │    ├── <p class="text"> "This is a paragraph." (Text Node)


*/


console.log("Accessing HTML using JS : \n\n" , document.body)
console.dir(document.body) // returns the properties of the body element