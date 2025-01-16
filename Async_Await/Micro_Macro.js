setTimeout(() => {//4
    console.log("Macrotask: setTimeout");
}, 0);
console.log("1");//1
async function fetchData() {//5
    // console.log("wait");
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    // console.log("wait")
    const data = await response.json();
    console.log(data);
}
fetchData();
function greet(){
    return new Promise((resolve)=>{
        resolve("hello");//3
    })
}
greet()
.then((data)=>{
    console.log(data);
})
console.log("3");//2




Promise.resolve().then(()=>console.log("2"));
queueMicrotask(()=>{
    console.log("1");
})