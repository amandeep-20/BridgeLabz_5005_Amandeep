let arr = [
    1, 2, 3, 7, 11, 13, 17, 19,
   23, 29, 31, 37, 41,
]

let arr2 = [1,2,3,4,5];

// using array....

// function intersection(arr,arr2){
//     let ans = [...arr];
//     for(let val of arr2){
//         if(ans.indexOf(val)==-1){
//             ans.push(val);
//         }
//     }
//     return ans;
// }
// console.log(intersection(arr,arr2))

//using set..
function intersection(arr,arr2){
    let set = new Set([...arr,...arr2]);
    return set;
}
console.log(intersection(arr,arr2));

