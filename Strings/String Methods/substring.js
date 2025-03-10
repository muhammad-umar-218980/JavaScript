/*

substring(start, end)
- Extracts the characters from a string, between two specified indices, and returns the new sub string.
- It does not accept negative indexes.

string.substring(start, end);
	✅ start → Required (starting index, inclusive).
	✅ end → Optional (ending index, exclusive).
	✔ If start > end, substring() swaps the values automatically.

*/

let fullName = "Muhammad Umar";

console.log(fullName.substring(0, 8));  // ✅ "Muhammad"  (Indexes 0 to 7)
console.log(fullName.substring(9, 13)); // ✅ "Umar"      (Indexes 9 to 12)
console.log(fullName.substring(3));     // ✅ "ammad Umar" (From index 3 to end)
console.log(fullName.substring(0));     // ✅ "Muhammad Umar" (From index 0 to end)



console.log(fullName.substring(8, 0));  // ✅ "Muhammad"  (Swaps automatically)

