let userAge = null;
let defaultAge = 25;
let age = userAge ?? defaultAge;
console.log(age);  // Output: 25

let username = '';
let defaultUsername = 'Guest';
let user = username ?? defaultUsername;
console.log(user);  // Output: ''

//check value null and undefined....if 1st is null/undefined then next value is print.