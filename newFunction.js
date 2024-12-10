const sum = new Function('a','b','return a+b');
console.log(sum(4,5));

const result = new Function('message', 'console.log(message);');
result('Hello, world!');  // Output: Hello, world!

