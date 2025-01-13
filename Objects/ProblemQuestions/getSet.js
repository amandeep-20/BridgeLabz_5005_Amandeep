let person={
    firstName:"aman",
    LastName:"deep"
};
Object.defineProperty(person,"fullName",{
    get(){
        return `${this.firstName} +" "+${this.LastName}`;
    },
    set(name){
        this.firstName=name;
        this.LastName=name;
    }
})
console.log(person);
person.fullName="aman deep";
console.log(person);