// 3 chain promsie

function display(num){
    return new Promise((resolve)=>{
        resolve(num);
    })
}
display(2)
.then((data)=>{
    console.log(data);
    return 2*data;
})
.then((data)=>{
    console.log(data);
})