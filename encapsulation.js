class Person {
    #age; // Private property

    constructor(name, age) {
        this.name = name;  // Public property
        this.#age = age;   // Private property
    }

    getAge() { // Public method accessing private property
        return this.#age;
    }
}

const person = new Person('Alice', 30);
console.log(person.name);     // Accessible: "Alice"
// console.log(person.#age);     // Error: Private field '#age' must be declared in an enclosing class
console.log(person.getAge()); // Accessible: 30