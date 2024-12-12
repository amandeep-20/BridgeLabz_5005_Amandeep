function get (p1,p2){
    let x = Math.pow((p2[0]-p1[0]),2);
    let y = Math.pow((p2[1]-p1[1]),2);
    let result = Math.sqrt(x+y);
    return result;
}
let p1 = [0,0];
let p2 = [11,11];
let ans = get(p1,p2);
console.log(ans.toFixed(2));