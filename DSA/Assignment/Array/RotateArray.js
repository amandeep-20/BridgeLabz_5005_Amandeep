// Rotate an Array
// Given an array and a number k, rotate the array to the right by k steps.

function reverse(arr, i, j) {
    let left = i;
    let right = j;

    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }

    return arr;
}

function rotate(arr, k) {
    const n = arr.length;
    k = k % n;

    reverse(arr, 0, n - 1);
    reverse(arr, 0, k - 1);
    reverse(arr, k, n - 1);

    return arr;
}

let arr1 = [1, 2, 3, 4, 5, 6, 7];
let k1 = 3;

let arr2 = [-1, -100, 3, 99];
let k2 = 2;

let ans1 = rotate(arr1, k1);
let ans2 = rotate(arr2, k2);

console.log(ans1);
console.log(ans2); 
