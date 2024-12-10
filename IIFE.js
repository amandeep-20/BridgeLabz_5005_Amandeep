// immediately invoker function expression 
//  The purpose of IIFE is to create a local scope and avoid polluting the global namespace.
//especially when working with closures or when you want to run a piece of code only once.
(function (){
    console.log("hello...");
})();


(function(name) {
    console.log(`Hello, ${name}!`); // Output: Hello, Alice!
})('Alice');


(() => {
    let result = 5 + 3;
    console.log(result); // Output: 8
})();
