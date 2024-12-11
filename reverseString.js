let string = "hy i'm aman";
let str = "";
for(let i=string.length-1; i>=0; i--){
    str = str + string[i];
}
// console.log(str);

let result = string.split('').reverse().join('');
console.log(result);