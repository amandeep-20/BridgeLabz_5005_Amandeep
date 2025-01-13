const Number = (num) => {
    return new Promise((resolve, reject) => {
        if (num > 0) {
            resolve(num * 2);
        }
        else reject("Number must be positive!");
    });
};

Number(5)
.then((result) =>{
    console.log(result);
})
.then(() => {
    console.log("This will not run")
})
.catch((error) => {
    console.error("Caught Error:", error)
})
.finally(() => console.log("Cleanup done."));