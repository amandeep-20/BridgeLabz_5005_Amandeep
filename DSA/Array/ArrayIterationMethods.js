// let arr=[1,2,3,4,6,7,8,54,34,235];

// foreach to miterate over each ele
// arr.forEach((ele)=>{
//     console.log(ele);
// })


//map to map values and return new array
// let ans=arr.map((ele)=>{
//     return ele*2;
// })
// console.log(ans);




/// filter values on the behalf of codition and reiurh new array
// let ans=arr.filter((ele)=>{
//     return ele>20;
// })
// console.log(ans);


//reduce to reduce array to a single value
// let ans=arr.reduce((acc,ele)=>{
//     return acc+ele;
// })
// console.log(ans);


/// reduceRight to reduce array to a single value bit ework form right to left
// let ans=arr.reduceRight((acc,ele)=>{
//     // console.log(ele);
//     return acc+ele;
// })
// console.log(ans);


//every return tryue if every ele pase the consition
// console.log(arr.every((ele)=>{
//     return ele>0;
// }))


/// some return tryue if any ele pase the consition
// let arr=[1,2,-3,4,6,7,8,54,34,235];
// console.log(arr.every((ele)=>{
//     return ele<0;
// }));


/// from method -- return  array objet of the itrrable objects
// console.log(Array.from("Asvdbnmb"));


// /keys() --- return keys objects of the array
// let arr=[1,2,-3,4,6,7,8,54,34,235];
// let keys=arr.keys();
// for(let k of keys){{
//     console.log(k);
// }}


// ...arr.entries iteate over key value -pair index and vale at that ined

// let entries=arr.entries();
// for(let i of entries){
//     console.log(i);
// }



//. with method take index and value to insert ata partucular index it changes and return in new array
const arr = [1, 2, 3, 4, 5];
const newArr = arr.with(2, 10);

console.log(newArr); 
console.log(arr);    


/// spraed --- to expand and iterable onject
console.log(...arr);


