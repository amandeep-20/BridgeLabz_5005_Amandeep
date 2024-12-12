function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function getFirst(n) {
    let result = [];
    let num = 2;
    while (result.length < n) {
        if (isPrime(num)) {
            result.push(num);
        }
        num++;
    }
    return result;
}

function PrimeDistances(arr) {
    let ans = [];
    for (let i = 1; i < arr.length; i++) {
        ans.push(arr[i] - arr[i - 1]);
    }
    return ans;
}
const first100 = getFirst(100);
const distances = PrimeDistances(first100);
console.log("Distances:", distances);
