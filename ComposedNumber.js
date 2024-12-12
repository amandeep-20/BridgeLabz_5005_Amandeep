let arr = [
    1, 2, 3, 7, 11, 13, 17, 19,
   23, 29, 31, 37, 41,
]

let arr2 = [1,2,3,4,5];

//using array....
function composed(arr,arr2){
    let result = [];
    // Add elements from arr1 not in arr2
    for(let val of arr){
        if(arr2.indexOf(val)===-1){
            result.push(val);
        }
    }
    // Add elements from arr2 not in arr1
    for(let val of arr2){
        if(arr.indexOf(val)===-1){
            result.push(val);
        }
    }
    return result
}

console.log(composed(arr,arr2))