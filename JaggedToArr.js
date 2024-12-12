let jaggedArray = [[1, 2, 3],[4, 5],[6, 7, 8, 9]];

function sum(jaggedArray){
    let ans=[];
    for(let array of jaggedArray){
        for(let val of array){
            ans.push(val);
        }
    }
    return ans;
}
let ans=sum(jaggedArray);
console.log(ans);