// const promise1 = new Promise(function(resolve,reject){
//     const flag = false;
//     if(flag){
//         resolve('done');
//     }
//     else{
//         reject('error');
//     }
// })
// promise1.then((value)=>{
//     console.log(value);
// })
// .catch((error)=>{
//     console.error(error);
// })
// .finally(()=>{
//     console.log('finally');
// })


const fetch = ()=>{
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            reject();
        },1000)
    })
}
fetch()
.then(()=>{
    console.log('done');
})
.catch(()=>{
    console.error('error');
})