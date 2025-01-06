// Find Pair with Given Sum
// Given a sorted array and a sum, find two elements that add up to the sum.

function twoSum(arr, target) {
    let n = arr.length;
    let mp = new Map();
    let ans = [];

    for (let i = 0; i < n; i++) {
        let diff = target - arr[i];
        if (mp.has(diff)) {
            ans.push([diff, arr[i]]);
        }
        else {
            mp.set(arr[i], 1);
        }
    }

    return ans;
}

let arr1 = [2, 7, 11, 15, 5, 4];
let target1 = 9;

let arr2 = [3, 2, 4];
let target2 = 6;

let ans1 = twoSum(arr1, target1);
let ans2 = twoSum(arr2, target2);

console.log(ans1);
console.log(ans2);