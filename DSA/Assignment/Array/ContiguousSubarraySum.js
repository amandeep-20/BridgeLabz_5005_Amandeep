// // Find the Largest Sum Contiguous Subarray
// // Given an integer array, find the contiguous subarray that has the largest sum and return that sum

// // Approach 1 - Using Nested Loops
// function maxSubarraySum(arr) {
//     let n = arr.length;
//     let maxSum = Number.MIN_VALUE;

//     for (let i = 0; i < n; i++) {
//         let sum = 0;
//         for (let j = i; j < n; j++) {
//             sum += arr[j];
//             maxSum = Math.max(maxSum, sum);
//         }
//     }

//     return maxSum;
// }


// Approach 2 - Kadane's Algorithm
function maxSubarraySum(arr) {
    let maxSum = Number.MIN_VALUE;
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        maxSum = Math.max(maxSum, sum);

        if (sum < 0) {
            sum = 0;
        }
    }

    return maxSum;
}

let arr1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let arr2 = [5, 4, -1, 7, 8];

let ans1 = maxSubarraySum(arr1);
let ans2 = maxSubarraySum(arr2);

console.log(ans1);
console.log(ans2);

