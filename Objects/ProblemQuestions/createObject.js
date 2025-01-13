// Using Object Literals
const person = {
    name: "Aman",
    age: 25,
    greet: function () {
        console.log(`Hello, my name is ${this.name}`);
    }
};

// console.log(person.name);
// console.log(person["age"]);

person.job = "Engineer";
person.age = 26;

delete person.age;
// console.log(person.age);


// Using new Object()
const car = new Object();
car.make = "Toyota";
car.model = "Corolla";
car.year = 2022;



// Using Constructor Functions
function Person(name, age) {
    this.name = name;
    this.age = age;
}
const person1 = new Person("aman", 30);




// Using ES6 Classes
class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
}

const dog = new Animal("Buddy", "Dog");



// Using Object.create()
const ans = {
    greet() {
        console.log("Hello!");
    }
};

const obj = Object.create(ans);
// obj.greet();