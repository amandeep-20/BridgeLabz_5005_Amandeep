class Animal {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        console.log('Some generic sound');
    }
}
class Dog extends Animal {
    constructor(name){
        super(name);
    }
    makeSound() {
        console.log(`hy ${this.name}`);
    }
}
const dog = new Dog('Buddy');
dog.makeSound();