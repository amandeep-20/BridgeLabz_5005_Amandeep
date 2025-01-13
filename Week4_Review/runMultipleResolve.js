// 1 Write a function that runs multiple promises concurrently and handles the results when all of them are resolved.

function display(a,b,c){
    let r1 = a;
    let r2 = b;
    let r3 = c;
    let aa = new Promise((resolve,reject)=>{
        if( r1== 1){
            resolve(r1);
        }
        else{
            reject("error in 1");
        }
    });
    let bb = new Promise((resolve,reject)=>{
        if( r2== 2){
            resolve(r2);
        }
        else{
            reject("error in r2");
        }
    });
    let cc = new Promise((resolve,reject)=>{
        if( r3== 3){
            resolve(r3);
        }
        else{
            reject("error in r3");
        }
    });
    Promise.allSettled([aa,bb,cc])
    .then((data)=>{
        console.log(data);
    })
    .catch((error)=>{
        console.log(error.message);
    })
}
let a =1;
let b =2;
let c =3;
display(a,b,c);