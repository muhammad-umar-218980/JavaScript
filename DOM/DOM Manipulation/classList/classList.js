/*

The setAttribute method is a good way to add a class to an element, but it has a drawback: it completely replaces the class attribute with the new value. 

If you want to add a class without affecting the existing classes, you can use the classList property.


The classList property allows you to add, remove, toggle, and check classes on an HTML element dynamically.

The classList property is read-only, but you can modify it by using the add(), remove(), toggle(), and contains() methods.


SYNTAX:
element.classList.add(class1, class2, ...);
element.classList.remove(class1, class2, ...);
element.classList.toggle("class")
element.classList.contains(class);
element.classList.replace(oldClass, newClass);
*/


// Example 1: Adding a class to an element

let btn = document.querySelector("button");
btn.classList.add("newClass");

btn.classList.add("btn", "btn-primary");


// Example 2: Removing a class from an element

btn.classList.remove("btn-primary");


// Example 3: Toggling a class
// If the class is already present, it will be removed. Otherwise, it will be added.

btn.classList.toggle("btn-primary");// added
btn.classList.toggle("btn"); // removed


// Example 4: Checking if an element has a class

if (btn.classList.contains("btn")) {
	console.log("The button has the class 'btn'");
}// false
if (btn.classList.contains("btn-primary")) {
	console.log("The button has the class 'btn-primary'");
}// true



// Example 5: Replacing a class

btn.classList.replace("newClass", "btn-danger");