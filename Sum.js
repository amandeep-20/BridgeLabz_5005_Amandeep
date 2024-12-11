let n = 10;
let arr = [];
for(let i=1; i<=n; i++){
    arr.push(i);
}

let result = arr.reduce(function(acc,cur){
    return acc+cur;
},0)
console.log(result);