function get(str) {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        arr.push(str.charCodeAt(i));
    }
    return arr;
}

const str = "Hello!";
console.log(get(str));