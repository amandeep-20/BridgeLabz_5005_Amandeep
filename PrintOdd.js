let n = 100;
let arr =[];
for(let i=0; i<n; i++){
    arr.push(i);
}
let result = arr.filter(function(val){
    return val%2!==0;
})
console.log(result);