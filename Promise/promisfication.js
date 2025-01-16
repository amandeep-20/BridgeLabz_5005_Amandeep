function fetchData(callback){
    setTimeout(()=>{
        callback(null,"data fetched");
    },2000)
}

fetchData((err,data)=>{
    if(err){
        console.log(err.message);
    }
    else{
        console.log(data);
    }
})

// now promisfication

function fetchDataBypromise (flag){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(flag==true){
                resolve(flag);
            }
            else{
             reject("not done!");   
            }
        },2000)
    })
}
fetchDataBypromise(true)
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err.message);
})

// now with async
async function get() {
    try{
        const data = await fetchDataBypromise(false);
        console.log(data);
    }
    catch(error){
        console.log(error);
    }
}
get();