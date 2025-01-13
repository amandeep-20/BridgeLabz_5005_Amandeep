//6 Write a function debounce that delays the processing of a function call until after a specified time 
// has passed since the last time it was invoked. Useful in scenarios like search input fields
function debounce(data){
    return new Promise((resolve,reject)=>{
        setTimeout((data)=>{
            if(data){
                resolve("done");
            }
            else{
                reject("not done");
            }
        },2000)
    })
}
debounce(true)
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error.message);
})