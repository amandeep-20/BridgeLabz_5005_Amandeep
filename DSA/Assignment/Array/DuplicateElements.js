// // Find Duplicate Elements
// // Given an array of integers, find the elements that appear more than once.

// // Approach 1 - Using Nested Loops, and Set to Store Duplicate Elements
// function duplicateArray(arr) {
//     let n = arr.length;

//     let st = new Set();

//     for (let i = 0; i < n - 1; i++) {
//         for (let j = i + 1; j < n; j++) {
//             if (arr[i] == arr[j]) {
//                 st.add(arr[j]);
//                 break;
//             }
//         }
//     }

//     let ans = [];
//     st.forEach((val) => ans.push(val));

//     return ans;
// }



// Approach 2 - Using Hashmap
function duplicateArray(arr) {
    let n = arr.length;

    let mp = new Map();
    for (let i = 0; i < n; i++) {
        if (mp.has(arr[i])) {
            mp.set(arr[i], mp.get(arr[i]) + 1);
        }
        else {
            mp.set(arr[i], 1);
        }
    }

    let ans = [];
    mp.forEach((val, key) => {
        if (val > 1) {
            ans.push(key);
        }
    });

    return ans;
}

let arr1 = [4, 3, 2, 7, 8, 2, 3, 1];
let arr2 = [54, 73, 25, 84, 73, 54, 54, 84, 54, 65];

let ans1 = duplicateArray(arr1);
let ans2 = duplicateArray(arr2);

console.log(ans1);
console.log(ans2);