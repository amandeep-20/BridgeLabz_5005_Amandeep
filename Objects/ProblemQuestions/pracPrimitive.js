const Number = {
    value: 7,
    toString() {
        return `Number: ${this.value}`;
    },
    valueOf() {
        return this.value * 2;
    }
};
console.log(String(Number));
console.log(Number(Number));
console.log(Number + " is awesome!");
console.log(Number * 3);


const obj = {
    [Symbol.toPrimitive](key) {
        if (key === "string") {
            return "String";
        } else if (key === "number") {
            return 42;
        } else {
            return null;
        }
    }
};
console.log(String(obj));
console.log(+obj);
console.log(obj + "");