// Subarray with Given Sum
// Given an array and a target sum, find the continuous subarray whose sum equals the given target.

function subarraySum(arr, target) {
    let n = arr.length;
    let currentSum = 0;
    let start = 0;

    for (let end = 0; end < n; end++) {
        currentSum += arr[end];

        while (currentSum > target && start <= end) {
            currentSum -= arr[start];
            start++;
        }

        if (currentSum === target) {
            return arr.slice(start, end + 1);
        }
    }

    return [];
}

let arr1 = [2, 7, 11, 15, 5, 2, 2];
let target1 = 9;

let ans = subarraySum(arr1, target1);
console.log(ans);
