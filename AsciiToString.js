let arr = [ 72, 101, 108, 108, 111, 33 ];
let str = '';
function get(arr){
    for(let i=0; i<arr.length; i++){
        str += String.fromCharCode(arr[i]);
    }
    return str;
}
console.log(get(arr));