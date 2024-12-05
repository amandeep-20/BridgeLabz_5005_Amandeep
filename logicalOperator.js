// logical AND(&&)
let age = 20;
let canVote = age >= 18 && "Yes";  // "Yes"
console.log(canVote);  // Output: "Yes"

let access = false;
let isAuthenticated = access && "You have access";
console.log(isAuthenticated);  // Output: false


//logical OR(||)
let username = '';
let defaultName = 'Guest';
let currentUser = username || defaultName;  // "Guest"
console.log(currentUser);  // Output: "Guest"

let isLoggedIn = true;
let message = isLoggedIn || "Please log in.";
console.log(message);  // Output: true

let name = "Alice";
let greeting = name || "Hello, guest!";
console.log(greeting);  // Output: "Alice"