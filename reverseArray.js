let arr = [
    7, 11, 13, 17, 19,
   23, 29, 31, 37, 41
]
// console.log(arr.reverse());

let i =0; j=arr.length-1;
while(i<j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
}
console.log(arr);