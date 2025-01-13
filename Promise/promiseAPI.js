// all(Waits for all promises in the array to resolve.)

// const a = new Promise((resolve,reject)=>{
//     resolve(1);
// })
// const b = Promise.resolve(2);
// const c = Promise.resolve(3);
// // const d = Promise.reject("error");
// Promise.all([a,b,c])
// .then((data)=>{
//     console.log(data);
// })
// .catch((data)=>{
//     console.error(data);
// })

// race(Resolves or rejects as soon as the first promise settles in the array (either resolves or rejects))

// const p1 = new Promise((resolve,reject)=>setTimeout(()=>{
//     resolve("p1");
// },2000));
// const p2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("p2");
//     },1000)
// })
// Promise.race([p1,p2])
// .then((data)=>{
//     console.log(data);
// })
// .catch((data)=>{
//     console.log(data);
// })

//any(Resolves with the first promise that fulfills)

// const p1 = Promise.reject("P1 Error");
// const p2 = Promise.resolve("P2");
// const p3 = Promise.resolve("P3");

// Promise.any([p1])
// .then((result) => {
//     console.log(result); // "P2"
// })
// .catch((error) => {
//     console.error(error);
// });


// // reject
// const p = Promise.reject("P1 Error");
// Promise.any([p])
// .then((result) => {
//     console.log(result); // "P2"
// })
// .catch((error) => {
//     console.error(error);
// });//give aggregate error all promises were rejected



// allSettled(Waits for all promises to settle (resolve or reject))
const p1 = Promise.resolve("P1");
const p2 = Promise.reject("P2 Error");
const p3 = Promise.resolve("P3");

Promise.allSettled([p1, p2, p3])
.then((results) => {
    console.log(results);
});