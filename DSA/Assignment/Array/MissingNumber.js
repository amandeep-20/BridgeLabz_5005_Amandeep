// Find the Missing Number
// Given an array of size n, containing numbers from 1 to n+1, find the missing number.

function findMissing(arr) {
    let n = arr.length;
    let term = 1;

    while (term != n) {
        if (arr.includes(term)) {
            term++;
        }
        else {
            return term;
        }
    }
}

let arr1 = [3, 0, 1];
let arr2 = [9, 6, 4, 2, 3, 5, 7, 0, 1];

let ans1 = findMissing(arr1);
let ans2 = findMissing(arr2);

console.log(ans1);
console.log(ans2);