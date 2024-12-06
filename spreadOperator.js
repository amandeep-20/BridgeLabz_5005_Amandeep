// const user1 = {
//     firstname : 'Aman',
//     lastname : 'deep'
// }

// // const user2 = user1; //point to same meomry address *(old methode object.assign)


// //assign new memory address (spread oprater)=> shallow copy
// const user2 = {...user1} 

// const arr = [1,2,3];

// const arr2 = [...arr];

// const arr3 = [].concat(arr2);


// shallow copy create only 1 object address diffrent like in below 'pata' is new object so it will provide same address to user4
// if any change happen in user4 for 'pata' object is also effect user3 to overcome we need 'deep copy' concept. 
const user3= {
    firstname : 'Aman',
    lastname : 'deep',
    pata : {
        city : 'delhi',
        pin : '123'
    }
}

const user4 = {...user3}

// Spread in Arrays
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2);

// Spread in Objects
const obj1 = { name: "John", age: 30 };
const obj2 = { ...obj1, city: "London" };
console.log(obj2);

// Combining Arrays
const arr3 = [6, 7];
const combinedArr = [...arr1, ...arr3];
console.log(combinedArr);

// Combining Objects
const obj3 = { country: "UK" };
const combinedObj = { ...obj1, ...obj3 };
console.log(combinedObj);