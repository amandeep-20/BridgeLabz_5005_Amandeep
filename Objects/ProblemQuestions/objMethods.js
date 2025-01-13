class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    display() {
        console.log(`${this.name} and ${this.age}`);
    }

    getKeys() {
        return Object.keys(this);
    }

    getEntries() {
        return Object.entries(this);
    }

    freezeObject() {
        Object.freeze(this);
    }

    sealObject() {
        Object.seal(this);
    }

    checkProperty(property) {
        return this.hasOwnProperty(property);
    }
}

const person1 = new Person("Aman", 25);
const person2 = new Person("Sandeep", 30);

person1.display();
person2.display();


console.log(person1.getKeys());

console.log(person1.getEntries());

console.log(person1.checkProperty("name"));

person1.freezeObject();
person1.name = "New Name";
console.log(person1);

person2.sealObject();
person2.newProperty = "This won't be added";
person2.age = 35;
console.log(person2);