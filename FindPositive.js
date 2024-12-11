function find(arr){
    let result = arr.filter((ele)=>{
        return ele >0;
    })
    return result;
}
let arr = [1,2,3,44,55,66,-22,-6];
console.log(find(arr));