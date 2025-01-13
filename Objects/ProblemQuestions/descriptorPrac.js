// 1

// const person = {
//     name: 'aman',
//     age: 21
// };

// const des = Object.getOwnPropertyDescriptor(person, 'name');
// console.log(des);

//2
// const person = {
//     name: 'Aman',
//     age: 21
// };

// Object.defineProperty(person, 'name', {
//     writable: false,
//     enumerable: false
// });

// person.name = 'sandy';

// for (let key in person) {
//     console.log(key);
// }

// console.log(person.name);

//3

const person = {};
Object.defineProperty(person, 'name', {
    value: 'aman',
    writable: true,
    enumerable: true,
    configurable: true
});

Object.defineProperties(person, {
    'age': {
        value: 30,
        writable: false,
        enumerable: true,
        configurable: true
    },
    'address': {
        value: 'chitkara',
        writable: true,
        enumerable: false,
        configurable: true
    }
});

console.log(person);
person.age = 35;
console.log(person.age);

for (let key in person) {
    console.log(key);
}