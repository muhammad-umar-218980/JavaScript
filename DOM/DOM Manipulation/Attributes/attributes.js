/*

🔹 Attributes in DOM

An attribute is extra information added to an HTML element, such as id, class, href, src, alt, etc. JavaScript provides methods to get, set, and modify these attributes dynamically.

*/


// 1. attributes property
/*

Returns a collection of all attributes of an element.

The collection is called a NamedNodeMap (similar to an array).

Each attribute is an object with .name and .value.

*/


let link = document.getElementById("link");

// Access all attributes
console.log(link.attributes); // NamedNodeMap { 0: id, 1: href, 2: target, length: 3 }

// Access specific attribute
console.log(link.attributes[1].name);  // Output: "href"
console.log(link.attributes[1].value); // Output: "https://example.com"


// or we can access all attributes using for loop
for (let i = 0; i < link.attributes.length; i++) {
	console.log(link.attributes[i].name + " = " + link.attributes[i].value);
}







// 2. getAttribute("attributeName")
/*

Returns the value of the specified attribute.

If the attribute does not exist, it returns null.

*/

let img = document.getElementById("image");

console.log(img.getAttribute("src")); // Output: "../DOM.png"
console.log(img.getAttribute("alt")); // Output: "Website Logo"
console.log(img.getAttribute("width")); // Output: null (doesn't exist)




// 3. setAttribute("attributeName", "value")
/*

Adds a new attribute or updates an existing one.

If the attribute already exists, it updates its value.

*/

img = document.querySelector("#img1");

img.setAttribute("src", "new-image.png");
img.setAttribute("alt", "New Image");






// 4. removeAttribute("attributeName")
// Removes the specified attribute from an element.

let btn = document.querySelector("#btn");

btn.removeAttribute("disabled");