let start = 10;
let end = 30;
let arr =[];
for(let i=start+1; i<end; i++){
    if(i%2==0){
        arr.push(i);
    }
}
let result = arr.reduce(function(acc,val){
    return acc+val;
},0);
console.log(result);