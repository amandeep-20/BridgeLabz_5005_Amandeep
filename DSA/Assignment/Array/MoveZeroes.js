// // Move Zeroes
// // Given an array, move all zeros to the end of the array while maintaining the relative order of the non-zero elements.

// // Approach 1 - Move Non-Zero Elements, and then Move Zeroes into the New Array
// function moveZeroes(arr) {
//     let n = arr.length;
//     let newArr = [];

//     let j = 0;
//     for (let i = 0; i < n; i++) {
//         if (arr[i] != 0) {
//             j++;
//             newArr.push(arr[i]);
//         }
//     }

//     while (j != n) {
//         newArr.push(0);
//         j++;
//     }

//     return newArr;
// }



// Approach 2 - Using Two Pointers
function moveZeroes(arr) {
    let n = arr.length;
    let i = 0;

    for (let j = 0; j < n; j++) {
        if (arr[j] != 0) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
        }
    }

    return arr;
}

let arr1 = [0, 1, 0, 3, 12];
let arr2 = [0, 3, 0, 6, 0, 32, 64, 23, 0, 72];

let ans1 = moveZeroes(arr1);
let ans2 = moveZeroes(arr2);

console.log(ans1);
console.log(ans2);