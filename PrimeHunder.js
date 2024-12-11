function isPrime(n){
    if(n<2){
        return false;
    }
    for(let i=2; i<=Math.sqrt(n); i++){
        if(n%i==0){
            return false;
        }
    }
    return true;
}
let arr = [];
let c = 0;
let count =0;
while(count!=100){
    if(isPrime(c)){
        arr.push(c);
        count++;
    }
    c++;
}
console.log(arr);