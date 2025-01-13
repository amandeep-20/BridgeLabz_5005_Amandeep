class Calculator {
    constructor() {
        this.value = 0;
    }

    add(number) {
        this.value += number;
        return this;
    }

    subtract(number) {
        this.value -= number;
        return this;
    }

    multiply(number) {
        this.value *= number;
        return this;
    }
    result() {
        console.log(this.value);
    }
}

const calc = new Calculator();
calc.add(10).subtract(2).multiply(3).result(); // Output: 24