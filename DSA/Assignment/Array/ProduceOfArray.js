// Product of Array Except Self
// Given an array, return an array such that each element is the product of all elements of the array except the element at the current index.

function product(arr) {
    let n = arr.length;
    let ans = [];

    for (let i = 0; i < n; i++) {
        let pro = 1;

        for (let j = 0; j < n; j++) {
            if (i !== j) {
                pro *= arr[j];
            }
        }

        ans.push(Object.is(pro, -0) ? 0 : pro);
    }

    return ans;
}

let arr1 = [1, 2, 3, 4];
let arr2 = [-1, 1, 0, -3, 3];

let ans1 = product(arr1);
let ans2 = product(arr2);

console.log(ans1);
console.log(ans2);
