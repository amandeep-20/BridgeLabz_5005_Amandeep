let arr =[];
function get(n){
    for(let i=0; i<n; i++){
        let num = Math.floor((Math.random()*n))+1;
        if(arr.indexOf(num)==-1){
            arr.push(num);
        }
    }
    return arr;
}
console.log(get(70));