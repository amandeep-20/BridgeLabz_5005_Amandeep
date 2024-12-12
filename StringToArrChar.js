let str = "hy i am amandeep";



// function get(str){
//     return str.split('');
// }
// console.log(get(str));



// let arr = [...str];
// console.log(arr);

function get(str){
    let array = [];
    let word = '';
    for(let i=0; i<str.length; i++){
        if(str[i]!==' ' && str[i]!=='\n'){
        word +=str[i];
    }
    if(word){
        array.push(word);
        word='';
    }
}
    if(word){
        array.push(word);
    }
    return array;
}
console.log (get(str));