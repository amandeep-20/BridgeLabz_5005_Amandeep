function fib(n){
    if(n==0){
        return 0;
    }
    if(n==1){
        return 1;
    }
    return fib(n-1) + fib(n-2);
}

const arr = [];
let n = 10;
for(let i=0; i<n; i++){
    arr.push(fib(i));
}
console.log(arr);