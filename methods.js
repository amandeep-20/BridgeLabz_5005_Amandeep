let obj={key:1,val:"sam"};

///object.keys
// console.log(Object.keys(obj));



///object.values
// console.log(Object.values(obj));

//object.entries
// console.log(Object.entries(obj));


/// object.assign
// let obj2=Object.assign(obj);
// console.log(obj2);


// Object.freeze  no modfiaction  
// let obj3={key:1,val:"sam"};
// Object.freeze(obj3);
// obj3.key=2; ///  not allowes only read property
// console.log(obj3);



//object.seal  add or delte nhi krr skte bbut we can modify

let obj3={key:1,val:"sam"};
Object.seal(obj3);
// obj3.pair=4;
// delete obj3.key;// not delete not allowed
console.log(obj3);


// Object.create()  to create new object