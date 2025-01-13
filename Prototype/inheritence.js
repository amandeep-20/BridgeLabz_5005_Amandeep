// class parent{
//     constructor(pname){
//         this.pname=pname;
//     }
//     greet(){
//         console.log("hlo from parent");
//     }
// }
// class child extends parent{
//     constructor(pname,name,age){
//         super(name);
//         this.age=age;
//     }
//     greet(){
//         super.greet();
//         console.log("hlo child");
//     }
//     intro(){
//         console.log(my parent name is ${this.pname} and i am of ${this.age});
//     }
// }
// let child1=new child("mom","sam",22);
// console.log(child1);
// child1.greet();
// child1.intro();








/// usong private varibales
class parent{
    #pname
    constructor(pname){
        this.#pname=pname;
    }
    getName(){
        return this.#pname;
    }
}
class child extends parent{
    constructor(pname,name,age){
        super(pname);
        this.name=name;
        this.age=age;
    }
    intro(){
        console.log(`my parent name is ${super.getName()} and i am of ${this.age}`);
    }
}
let child1=new child("sam","sandy",22);
console.log(child1);
child1.intro();