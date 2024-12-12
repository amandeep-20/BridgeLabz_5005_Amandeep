let str = "hy i am aman";
// let arr = str.split(' ');
// console.log(arr);



function get(str){
    let array = [];
    let word = '';
    for(let i=0; i<str.length; i++){
        if(str[i]!==' ' && str[i]!=='\n'){
        word +=str[i];
    }
    else{
        if(word){
            array.push(word);
            word='';
        }
    }
}
    if(word){
        array.push(word);
    }
    return array;
}
console.log (get(str));