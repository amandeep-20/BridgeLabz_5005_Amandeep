class Vehical {
    constructor(type){
        this.type = type;
    }
    start(){
        console.log(`star this ${this.type}`);
    }
}
const obj = new Vehical('car');
obj.start();