// Mark-and-Sweep Algorithm

//null object if no need of them
function example() {
    let obj = { name: "Alice" }; 
    obj = null;
}

// Memory Leaks in JavaScript

// Global Variables:
let globalVar = "I persist forever";


// Uncleared Timers/Intervals
let timer = setInterval(() => console.log("Leaking"), 1000);
clearInterval(timer); // Prevents memory leak


// Closures
function createClosure() {
    let largeData = new Array(1000).fill("data");
    return function () {
        console.log(largeData);
    };
}

//use weak map and set