class myArray extends Array{
    sum(){
        console.log(this[0]);
        let sum=this.reduce((acc,ele)=>{
            return acc+ele;
        });
        return sum;
    }
    average(){
        console.log(`${this.sum()}`);
        return this.sum/this.length;
    }
}
let arr=[1,2,3,4,5,6];
let myarray=new myArray(...arr);
console.log(myarray.average());



class sumArray extends Array {
    sum() {
        return this.reduce((acc, curr) => acc + curr, 0);
    }
}

const num = new sumArray(1, 2, 3, 4, 5);
console.log(num.sum()); // Output: 15


class myString extends String {
    reverse() {
        return this.split("").reverse().join("");
    }
}

const str = new myString("hello");
console.log(str.reverse()); // Output: "olleh"
