let arr = [1,2,3,44,55,66];
let result = arr.reduce(function(acc,val){
    return acc+val;
})
console.log(result);