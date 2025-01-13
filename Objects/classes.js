class Person {
    //1
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    //2 Instance Method
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }

    //3 Static Method
    static species() {
        return "Homo sapiens";
    }
}

const obj = new Person("aman", 25);
obj.greet();
console.log(Person.species());
