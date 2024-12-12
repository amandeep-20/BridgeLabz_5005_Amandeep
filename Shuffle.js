let arr=["ans","sandeep","sandy","aman"];
function shuffleArray(arr){
    let n=arr.length;
    for(let i=0;i<arr.length;i++){
        let a=Math.floor(Math.random()*(n));
        let b=Math.floor(Math.random()*(n));
        [arr[a],arr[b]]=[arr[b],arr[a]];
    }
    return arr;
}
let ans=shuffleArray(arr);
console.log(ans);