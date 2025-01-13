function num(data){
    return new Promise((resolve,reject)=>{
        if(data>0){
            resolve(data*2)
        }
        else{
            reject("number is less");
        }
    })
    .then((result)=>{
        return result -1;
    })
}
num(5)
.then((data)=>{
    console.log(data);
})
.catch((data)=>{
    console.log("error");
})