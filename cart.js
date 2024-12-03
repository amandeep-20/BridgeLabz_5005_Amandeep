const ps = require("prompt-sync")
const prompt = ps();
const items = [
    {name: 'Apple', price: 100},
    {name: 'Banana', price: 120},
    {name: 'Orange', price: 200},
    {name: 'Eggs', price: 500},
    {name: 'Bread', price: 50}
]

let cart = [];
function addCart(Name){
    let foundItem = null; 
    items.map(item=>{
        if(Name.toLowerCase()===item.name.toLowerCase()){
            foundItem = item;
        }
    })
    if(foundItem){
        cart.push(foundItem);
    }
    else{
        console.log("not found");
    }
}
addCart('apple');
addCart('orange');
addCart('eggs');

function getTotal(){
    const total = cart.reduce((sum,items)=>{
        return sum + items.price;
    },0)
    return total;
}
console.log(cart);
let total = getTotal();
console.log(total);

function removeItem(name) {
    let foundIndex = -1;
    cart.forEach((item, index) => {
        if (name.toLowerCase() === item.name.toLowerCase()) {
            foundIndex = index;
        }
    });

    if (foundIndex !== -1) {
        cart.splice(foundIndex, 1);
    } 
}
removeItem('orange');
console.log(cart);
