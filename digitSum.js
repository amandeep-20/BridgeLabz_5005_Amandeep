function sumOfDigit(n){
    let ans = 0 ;
    while(n!=0){
        ans += n%10;
        n=n/10;
    }
    return ans;
}
let result = sumOfDigit(123);
console.log(parseInt(result));