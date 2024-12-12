let arr = [
    [1, 2, 3],[4, 5],[6, 7, 8, 9]
];
function get(arr){
    let max=0;
    for(let val of arr){
        max = val.reduce((acc,val)=>{
            if(acc<val){
                acc=val;
            }
            return acc;
        },val[0])
    }
    return max;
}
console.log(get(arr));