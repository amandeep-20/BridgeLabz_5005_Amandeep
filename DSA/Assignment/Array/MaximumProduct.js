// Find Maximum Product of Three Numbers
// Given an integer array, find the maximum product of any three numbers.

function maxProduct(arr) {
    arr.sort((a, b) => b - a);

    return arr[0] * arr[1] * arr[2];
}

let arr = [32, 53, 236, 4, 53, 5, 23, 53];
let ans = maxProduct(arr);
console.log(ans);