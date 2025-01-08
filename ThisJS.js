console.log(this);
"use strict";
console.log(this);

// this in methods
const obj1 = {
    name: "Aman",
    greet() {
        console.log(this.name);
    }
};
obj1.greet();


// this in Arrow Functions
const obj = {
    name: "Aman",
    greet: () => {
        console.log(this.name);
    }
};
obj.greet();

const obj2 = {
    name: "Aman",
    greet() {
        const inner = () => console.log(this.name);
        inner();
    }
};
obj2.greet();


// this in Class
class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello, ${this.name}`);
    }
}
const person = new Person("Aman");
person.greet();

// Explicit Binding of this
function greet() {
    console.log(this.name);
}

const obj3 = { name: "Aman" };
greet.call(obj3);
greet.apply(obj3);

const ans = greet.bind(obj3);
ans();