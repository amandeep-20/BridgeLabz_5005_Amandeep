function difference(arr1, arr2) {
    let result = [];
    for (let val of arr1) {
        if (arr2.indexOf(val) === -1) {
            result.push(val);
        }
    }
    return result;
}

let arr1 = [1, 2, 3, 7, 11, 13];
let arr2 = [1, 2, 3, 4, 5];
const result = difference(arr1, arr2);
console.log(result);
