const obj = { name: "aman" };
console.log(Object.getOwnPropertyDescriptor(obj, "name"));


const obj1 = {};
Object.defineProperty(obj, "name", {
    value: "Aman",
    writable: false
});
console.log(obj1.name);
obj.name = "rana";
console.log(obj1.name);



const obj3 = {};
Object.defineProperty(obj, "name", {
    value: "Aman",
    enumerable: false
});
console.log(Object.keys(obj));
console.log(obj.name);



const obj4 = {};
Object.defineProperty(obj, "name", {
    value: "Aman",
    configurable: false
});

delete obj4.name;
console.log(obj.name);