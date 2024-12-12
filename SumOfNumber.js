let ps = require('prompt-sync');
let prompt = ps();
let n1 = BigInt(prompt("enter 1st no.: "));
let n2 = BigInt(prompt("enter 2nd no.: "));
let sum = n1+n2;
console.log(sum.toString());
