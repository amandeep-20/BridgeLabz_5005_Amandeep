//key name is same to get data in obj destruc.....
const user = {
    name : 'aman',
    age : 21,
    city : 'asr'
}
// const {name,age } = user;
// console.log(name,age);

const {name : username ,age : Age } = user; // name => username same age => Age
// console.log(username,Age);




//-------------------------------------nested obj----------------------------------------------------------------//

// const person = {
//     id: 1,
//     profile: { name: "Alice", age: 25 },
//     address: { city: "New York", country: "USA" }
// };
// const {profile: {name}} = person;// extract data from nested object
// const {address} = person;
// const {city} = address;

// console.log(name, city);
// console.log(address);

const object = { a: 1, b: { c: 2, d: { e: 3 } } };
const {b: {d: {e} } } = object;
// console.log(e);




//-----------------------------------------function parametre--------------------------------------------------------//

// const user = {
//     name : 'aman',
//     age : 21
// }
// get(user);
// function get({name, age}){
//     console.log(name, age);
// }




//---------------------------------------a way where we dont know the property name-----------------------------//

const key = "name";
const obj = { name: "Alice", age: 25 };
const { [key]: value } = obj;
// console.log(value);

const person = {
    name : 'aman',
    age : 21,
    city : 'asr'
}
function get(obj,data){
    const {[data] : value} = obj;
    return value;
}
// console.log(get(person,"age"));
// console.log(get(person,'name'));



//--------------------------------------------mixing array and obj..---------------------------------------------------------//

const data = {
    colors: ["red", "green", "blue"],
    location: { city: "San Francisco", state: "CA" }
};
const {location : {city}, colors:[,a]} = data;
// console.log(city,a);
const {colors : {1:b}} = data;
// console.log(b);

// swap....
let ab = 1;
let ba = 2;
[ab,ba] = [ba,ab];
// console.log(ab,ba)


//-----------------------------------------Scenario-Based Questions---------------------------------------------------//

const apiResponse = {
    user: { id: 101, name: "John" },
    meta: { timestamp: "2024-12-03T10:00:00Z" }
};
const {user : {id}, meta : {timestamp}} = apiResponse;
// console.log(id,timestamp);


function getUser() {
    return { name: "Alice", age: 25, location: "USA" };
}

const {name,age,location} = getUser();
// console.log(name,age,location);



//-----------------------------------------Challenge Question---------------------------------------------------//

// Combining Rest and Spread: 
// Write a function that accepts an object with any number of properties, 
// extracts the first property, and collects the rest into a separate object.

const prop = {
    a: 1,
    b: 2,
    c: 3
}

function extract(obj){
    const [key, ...rest] = Object.entries(obj);// coverting object into arr [["a", 1], ["b", 2], ["c", 3]]
    const restObj = Object.fromEntries(rest);// coverting  arr into object { b: 2, c: 3 }
    return {first : key , rest : restObj};
}
// console.log(extract(prop));


const fetch = { firstName: "Alice", lastName: "Johnson", age: 30 };
const{firstName : Uname} = fetch;
console.log(Uname);