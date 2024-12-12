let str = 'hy       i am aman';
let count = 0;
let flag = false
function countWords(str){
    for(let i=0; i<str.length; i++){
        if(str[i]!==' ' && str[i]!=='\n'){
            if(!flag){
                flag=true;
                count++;
            }
        }
        else{
            flag = false;
        }
    }
    return count;
}
// console.log(countWords(str));

function countW(str) {
    let words = str.split(/\s+/).filter(word => word.trim() !== "");
    return words.length;
}
console.log(countW(str));