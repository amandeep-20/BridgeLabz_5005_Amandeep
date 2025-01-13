const obj1 = {
    toString() {
        return "String";
    },
    valueOf() {
        return 99;
    }
};

console.log(String(obj1));
console.log(+obj1);
console.log(obj1 + "");


const obj = {
    [Symbol.toPrimitive](hint) {
        if (hint === "string") {
            return "String";
        } else if (hint === "number") {
            return 42;
        } else {
            return null;
        }
    }
};

console.log(String(obj));
console.log(+obj);
console.log(obj + "");