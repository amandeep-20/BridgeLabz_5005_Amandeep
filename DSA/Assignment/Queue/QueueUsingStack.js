class QueueUsingStacks {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    enqueue(x) {
        this.stack1.push(x);
    }

    dequeue() {
        if (!this.stack2.length) {
            while (this.stack1.length) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2.pop();
    }

    front() {
        if (!this.stack2.length) {
            while (this.stack1.length) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2[this.stack2.length - 1];
    }

    empty() {
        return !this.stack1.length && !this.stack2.length;
    }
}

const queue = new QueueUsingStacks();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.front());
console.log(queue.dequeue());
console.log(queue.empty());
