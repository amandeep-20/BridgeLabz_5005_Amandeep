// older syntax
function fun(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}
let ans=fun(1)(2)(4);
console.log(ans);



const add=(a)=>(b)=>(c)=>{return a+b+c};
let result=add(1)(2)(3);
console.log(result);