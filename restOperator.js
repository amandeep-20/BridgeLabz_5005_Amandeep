// Rest in Functions
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log("Sum:", sum(1, 2, 3, 4));
  
// Rest in Array Destructuring
const [first, ...rest] = [10, 20, 30, 40];
console.log("First:", first); // Output: 10
console.log("Rest:", rest);   // Output: [20, 30, 40]
  
// Rest in Object Destructuring
const person = { name: "Alice", age: 25, city: "Paris" };
const { name, ...details } = person;
console.log("Name:", name);        // Output: "Alice"
console.log("Details:", details);  // Output: { age: 25, city: "Paris" }
  