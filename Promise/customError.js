class customError extends Error{
    constructor(msg,){
        super();
        this.message = msg;
        this.name = "my error"
    }
}
function num(a){
    if(a<0){
        throw new customError("error: number less then 0");
    }
    return a;
}

try{
    console.log(num(-1));
}
catch(error){
    console.log(error.message);
}
// console.log("first")