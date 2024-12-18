
//sort an array
let arr=[12,3,4,5,6,7,8,9,10];
// arr.sort();  //sort lexographically


// arr.sort(function(a,b){ // sort in acsneding and descending
//     return a-b;
// });
// console.log(arr);


// to sorted array sort array and return new array
// let ans=arr.toSorted();
// console.log(ans);

// let ans1=arr.toSorted(function (a,b){
//     return a-b;
// })
// console.log(ans1);



// reverse
//reverse array in same array
arr.reverse();
console.log(arr);

let ans=arr.toReversed();
console.log(ans);


function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i]; // Element to be compared
        let j = i - 1;

        // Move elements of arr[0..i-1] that are greater than key to one position ahead
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Insert the key in its correct position
        arr[j + 1] = key;
    }
    return arr;
}