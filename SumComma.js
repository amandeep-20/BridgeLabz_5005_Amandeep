let str = "10,20,30,40,50";
let arr = str.split(",")
// let arr = str.split(",").map(Number);
let result = arr.map(num=> parseInt(num));
let ans = result.reduce((acc,cur)=>{
    return acc+cur;
},0);
console.log(ans);