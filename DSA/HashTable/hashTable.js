class HashTable{
    constructor(size){
        this.size = size;
        this.arr = new Array(size);
    }
    getHash(key){
        return key%this.size;
    }

    set(key, value){
        const idx = this.getHash(key);
        if(!this.arr[idx]){
            this.arr[idx] = []; 
        }
        this.arr[idx].push([key,value]);
        
    }

    print(){
        console.log(this.arr);
    }

    get(key){
        const idx = this.getHash(key);
        if(this.arr[idx]){
            for(let val of this.arr[idx]){
                if(val[0] === key){
                    return val[1];
                }
            }
        }
        return -1;
    }

    remove(key){
        const idx = this.getHash(key);
        if(!this.arr[idx]){
            return -1;
        }
        let ans = this.arr[idx];
        const result = ans.filter(val=>val[0]!== key);
        if(result.length === ans.length){
            return -1;
        }
        this.arr[idx] = result;
    }

    getKeys(){
        const arr = [];
        for(let arr2 of this.arr){
            if(arr2){
                for(let val of arr2){
                    if(!arr.includes(val[0])){
                        arr.push(val[0]);
                    }
                }
            }
        }
        return arr;
    }
    getValue(){
        const arr = [];
        for(let arr2 of this.arr){
            if(arr2){
                for(let val of arr2){
                    if(!arr.includes(val[1])){
                        arr.push(val[1]);
                    }
                }
            }
        }
        return arr;
    }
}
const hashTable = new HashTable(80);
// hashTable.set("name","aman");
// hashTable.set("age",25);
// hashTable.set("add","asr");
hashTable.set(10,20);
hashTable.set(30,40);
hashTable.set(90,10);


// console.log(hashTable.get("name"));
// console.log(hashTable.get("age"));
// console.log(hashTable.get("add"));
console.log(hashTable.getKeys());
console.log(hashTable.getValue());
hashTable.print();