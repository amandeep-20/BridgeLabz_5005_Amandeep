class Parent {
    constructor(name) {
        this.name = name;
    }
    display(){
        console.log(`hy ${this.name}`);
    }
}
//we call super in child class if we want to pass through parent class constructor and if we want to use this key word
// we need to call empty super();
class Child extends Parent {
    constructor(name, age) {
        super(name); // Call Parent constructor
        this.age = age;
    }
    display(){
        console.log(`${this.name}`);
        super.display();
    }
}
const parent = new Parent('aman',21);
const child = new Child('Alice', 10);
// console.log(child); // Output: { name: 'Alice', age: 10 }
child.display();
parent.display();