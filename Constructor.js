class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age; 
    }

    greet() {
        console.log(`${this.name} and ${this.age}`);
    }
}

const person1 = new Person("Aman", 25);
const person2 = new Person("Sandeep", 30);

person1.greet();
person2.greet();


//inherit
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(this.name);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    speak() {
        console.log(this.name);
    }
}

const dog = new Dog("Rex", "German Shepherd");
dog.speak();
