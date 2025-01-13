function Example() {
    this.name = "Default Name";
    return { name: "Custom Name" };
}

const obj = new Example();
console.log(obj.name);


function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function () {
        console.log(this.name,this.age);
    };
}

const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", 30);

person1.greet();
person2.greet();