/*

replace() method:
The replace() method replaces a specific part of a string with another value and returns a new string (it does not modify the original string).

	✅ Returns a new string → Does not change the original string.
	✅ Case-sensitive → "umar" ≠ "Umar".
	✅ Only replaces the first match (Use replaceAll() or regex for multiple).

*/

let fullName = "Muhammad Umar";

// Replace "Umar" with "Ali"
let newName = fullName.replace("Umar", "Ali");

console.log(`Original: ${fullName}`);
console.log(`Replaced: ${newName}`);

// replace() is case-sensitive and only replaces the first match

let text = "Hello Umar, Umar is learning JavaScript.";
let newText = text.replace("Umar", "Ali");

console.log(newText); // ✅ "Hello Ali, Umar is learning JavaScript."
// The second "Umar" is not replaced because replace() is case-sensitive and only replaces the first match.



// to replace all occurrences, use regex or replaceAll() method
newText = text.replaceAll("Umar", "Ali");

console.log(newText); // ✅ "Hello Ali, Ali is learning JavaScript."

// or use regex
newText = text.replace(/Umar/g, "Ali");
// The 'g' flag at the end of the regex makes it replace all occurrences, not just the first one.
console.log(newText); // ✅ "Hello Ali, Ali is learning JavaScript."

/*

📌 /Umar/g replaces all occurrences.
📌 g (global flag) → Replaces everywhere.

*/