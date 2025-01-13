// every object has an internal property called [[Prototype]] that points to another object. This other object is called the prototype.


// adding a method to the prototype of an object
function user (name,age) {
  this.name = name;
  this.age = age;
}
user.prototype.greet = function () {
  console.log(`Hello ${this.name}`);
}
const obj = new user('aman',21);
obj.greet();



// prototype chain
const me = {
    greet: function() {
        console.log('Hello!');
    }
}
const you = Object.create(me); 
const him = Object.create(you);
you.greet();



// prototype property
const person ={};
console.log(Object.getPrototypeOf(person) === Object.prototype);// true




// Object.setPrototypeOf()
Object.setPrototypeOf(person, me);
// console.log(Object.getPrototypeOf(person));
person.greet();
// console.log(Object.getPrototypeOf(person) === Object.prototype);// false


console.log(person.__proto__===me.__proto__);//false
console.log(person.__proto__===me);//true
// console.log(person === me);//false




// console.log(obj.__proto__);
// console.log(person.__proto__);
// console.log(user.prototype);