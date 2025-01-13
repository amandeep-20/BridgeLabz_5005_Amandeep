// Global Scope
let globalVar = "I am global";

function demoScope() {
  // Function Scope
  let funcVar = "I am function-scoped";
  if (true) {
    // Block Scope
    let blockVar = "I am block-scoped";
    var hoistedVar = "I am function-scoped due to var";
    console.log(blockVar);
  }
  console.log(funcVar); 
  console.log(hoistedVar);
  // console.log(blockVar);  // Error
}

demoScope();

// console.log(funcVar);      // Error: funcVar is not defined
// console.log(hoistedVar);   // Error: hoistedVar is not defined
console.log(globalVar);
