//1
class me {
    constructor(name, age) {
        this.name = name;
        this.age = age; 
    }

    display() {
        console.log(`${this.name} and ${this.age}`);
    }
}

const person1 = new Person("Aman", 25);
const person2 = new Person("Sandeep", 30);

person1.display();
person2.display();


//2 inherit
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

//3 function
function user(name, age) {
    this.name = name;
    this.age = age;
}

const p1 = new user("amandeep", 21);
console.log(p1.name); 
console.log(p1.age);