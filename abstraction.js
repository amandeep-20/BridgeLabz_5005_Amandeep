class AbstractVehicle {
    constructor() {
        if (new.target === AbstractVehicle) {
            throw new Error('Cannot instantiate abstract class');
        }
    }
    move() {
        throw new Error('Method must be implemented');
    }
}
class Car extends AbstractVehicle {
    move() {
        console.log('Car is moving');
    }
}
// Abstraction in JavaScript can be implemented by creating base classes that other classes extend.
const car = new Car();
car.move(); // Output: Car is moving

//Abstract classes cannot be instantiated directly (this must be enforced manually in JavaScript).
class Shape {
    constructor() {
        console.log("Shape instance created");
    }
}
const shapeInstance = new Shape(); // Instantiating `Shape` directly
