let arr = [1,2,3,44,55,66,-22,-6];
let ans = arr.reduce((acc,val)=>{
    if(acc<val){
        acc=val;
    }
    return acc;
},arr[0]);
console.log(ans);