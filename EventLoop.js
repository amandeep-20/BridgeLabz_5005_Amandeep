console.log("hello");

setTimeout(function add(){
    console.log("task 1 run")
},5);

console.log("aman");

function display(){
    console.log("1");
    setTimeout(()=>{
        console.log("task 2 run");
    },1)
    console.log("2");
}

display();

setTimeout(()=>{
    console.log("task 3 run");
},10)
