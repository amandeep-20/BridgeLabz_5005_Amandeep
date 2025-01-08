class Animal {
    makeSound() {
        console.log("sound");
    }
}

class Dog extends Animal {
    makeSound() {
        console.log("Woof");
    }
}

class Fish extends Animal {
    makeSound() {
        console.log("...");
    }
}

function animalSound(animal) {
    animal.makeSound();
}
// const dog = new Dog();
// animalSound(dog);

// const fish = new Fish();
// animalSound(fish);

//right way L-liskov substituion principle 
class Animal {
    move() {
        console.log("animal moves");
    }
}

class Dog extends Animal {
    move() {
        console.log("dog run");
    }
}

class Fish extends Animal {
    move() {
        console.log("fish swim");
    }
}

function animalMove(animal) {
    animal.move();
}

const dog = new Dog();
animalMove(dog);

const fish = new Fish();
animalMove(fish);
