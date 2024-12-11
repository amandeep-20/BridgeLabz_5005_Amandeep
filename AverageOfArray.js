let arr = [1,2,3,44,55,66];
let result = arr.reduce(function(acc,val){
    return acc+val;
})
let length = arr.length;
console.log(result/length);