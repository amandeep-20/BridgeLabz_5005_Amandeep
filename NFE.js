// is a function expression where the function is assigned to a variable, and the function has a name.
// used for call back , recursion 
// debbugging
const greet = function greet() {
    console.log("Hello, World!");
};

greet(); // Output: Hello, World!


const factorial = function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1); // Recursively calling itself
};
console.log(factorial(5)); // Output: 120=