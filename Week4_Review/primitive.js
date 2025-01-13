//4 Write a custom object that overrides the valueOf and toString methods to demonstrate the conversion to primitive values

const Number = {
    value: 7,
    toString() {
        return `Num: ${this.value}`;
    },
    valueOf() {
        return this.value * 2;
    }
};
console.log(String(Number));
console.log(Number(Number));
console.log(Number * 3);