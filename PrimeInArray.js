// Create a function that will return in an array the first “p” prime numbers greater than “n”
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
let count = 10;
let num = 5;
function prime(count,n){
    let current = n+1;
    let arr = [];
    while(arr.length<count){
        if(isPrime(current)){
            arr.push(current);
        }
        current++;
    }
    return arr;
}
console.log(prime(count,num));