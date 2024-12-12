let str = "i am amandeep from asr";
let count=0;
let ans="";
function get(str){
    let c=0;
    let array = [];
    let word = '';
    for(let i=0; i<str.length; i++){
        if(str[i]!==' ' && str[i]!=='\n'){
        word +=str[i];
        c++;
    }
    else{
        if(count<c){
            count=c;
            c=0;
            ans=word;
        }
        if(word){
            array.push(word);
            word='';
        }
    }
}
    if(word){
        array.push(word);
    }
    return ans;
}

// function get(str){
//     let arr = str.split(" ");
//     let ans = "";
//     for(val of arr){
//         if(val.length>ans.length){
//             ans = val;
//         }
//     }
//     return ans;
// }
console.log(get(str));