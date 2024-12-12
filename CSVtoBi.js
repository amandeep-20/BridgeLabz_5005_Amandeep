let text = "Name, Age, City\nJohn, 25, New York\nAlice, 30, Los Angeles\nBob, 22, Chicago";

function get(text){
    let arr = text.split('\n');
    let ans = arr.map(val => val.split(','));
    return ans;
}
console.log(get(text));