class CustomError extends Error {
    constructor(message, code) {
        super(message); 
        this.name = this.constructor.name;
        this.code = code;
    }
}

try {
    throw new CustomError("Something went wrong!", 500);
} catch (error) {
    console.log(error.name);    
    console.log(error.message); 
    console.log(error.code);    
}