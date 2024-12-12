let arr = [
    [1, 2, 3],[4, 5],[6, 7, 8, 9]
];
function get(arr){
    let sum=0;
    for(let val of arr){
        sum += val.reduce((acc,val)=>{
            return acc+val;
        },val[0])
    }
    return sum;
}
console.log(get(arr));