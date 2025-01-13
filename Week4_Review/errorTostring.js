//2 Create a custom error class that extends the built-in Error class, and implement the toString() method to return a formatted string of the error message.

class customError extends Error{
    constructor(msg,){
        super();
        this.message = msg;
        this.name = "my error"
        this.code = 400;
    }
    toString(){
        return this.message + "with error " +  this.code
    }
}
function toString(a){
    if(a<0){
        throw new customError("error: number less then 0 ");
    }
    return a;
}

try{
    console.log(toString(-1));
}
catch(error){
    // console.log(error.message);
    console.log(error.toString())
}