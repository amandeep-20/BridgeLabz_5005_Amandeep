//no inherit, prevent prototype pollution, not use inbuilt methods


// creation of object without prototype
const obj= Object.create(null);
obj.name = "aman";
obj.age = 21;

console.log(obj); // { name: 'aman', age: 21 }
console.log(obj.__proto__); // undefined
console.log(Object.getPrototypeOf(obj)); // null



// // Using an object without __proto__ prevents potential prototype pollution attacks.
// const Object = Object.create(null);
// Object["__proto__"] = "hello!";
// console.log(Object["__proto__"]); // "Hello!"
// console.log(Object.__proto__); // undefine


//to set the prototype of an object to null.
const obj1 = { name: "aman" };
Object.setPrototypeOf(obj1, null);
console.log(obj1.__proto__); // undefined
console.log(obj1.toString); // undefined




let obj2 = Object.create(null);
obj2.display = function() {
    console.log("Hello");
}
obj2.display();

Object.defineProperty(obj2, "name",{
    value: "aman",
    writable: false
})
console.log(obj2.__proto__); // undefined