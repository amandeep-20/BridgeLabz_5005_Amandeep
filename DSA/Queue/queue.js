class Queue {
    constructor(){
        this.arr = [];
    }
    //add 
    enqueue(element){
        this.arr.push(element);
    }

    //remove
    dequeue(){
        if(this.isEmpty()){
            return "Queue is Empty";
        }
        return this.arr.shift();
    }
    
    //peek
    peek(){
        if(this.isEmpty()){
            return "Queue is Empty";
        }
        return this.arr[0];
    }

    // check empty
    isEmpty(){
        return this.arr.length === 0;
    }

    //print
    print(){
        return this.arr;
    }
}

const queue = new Queue();
queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue.print());