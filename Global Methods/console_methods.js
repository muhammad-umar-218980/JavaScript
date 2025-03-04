// Log
console.log("Hello, this is a log message!");
let Name = "Umar";
console.log("User name is:", Name);
console.log("\n");


// Warn
console.warn("Warning: Low battery!");
console.log("\n");


// Error
console.error("Error: Something went wrong!");
console.log("\n");


// Table
console.table({ Name: "Umar", Age: 18, City: "Karachi" });
console.log("\n");

// Table with Array of Objects
let users = [
 { name: "Alice", age: 25 },
 { name: "Bob", age: 30 },
];
console.table(users);
console.log("\n");


// Count
console.count("Count");
console.count("Count");


// Time
console.time("Loop Time");

for (let i = 0; i < 100000; i++) {
 // Simulating a time-consuming task
}

console.timeEnd("Loop Time");
console.log("\n");


// Group
console.group("User Info");
console.log("Name: Umar");
console.log("Age: 18");
console.groupEnd();

console.log("\n");

// clear
console.clear();



// Complete Example
console.log("This is a log message.");
console.warn("This is a warning!");
console.error("This is an error!");

let data = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];
console.table(data);

console.time("Execution Time");
for (let i = 0; i < 100000; i++) {}
console.timeEnd("Execution Time");

console.group("Grouped Messages");
console.log("Message 1");
console.log("Message 2");
console.groupEnd();
