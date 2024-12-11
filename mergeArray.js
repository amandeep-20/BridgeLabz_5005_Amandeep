// Create a function that will merge two arrays and return the result as a new array

let arr = [
    7, 11, 13, 17, 19,
   23, 29, 31, 37, 41
]
let arr2 = [1,2,3,4,5];

let result = [...arr,...arr2];
// console.log(result);


function merge(arr,arr2){
    let ans = [];
    for(let val of arr){
        ans.push(val);
    }
    for(let val of arr2){
        ans.push(val);
    }
    return ans;
}

console.log(merge(arr,arr2));