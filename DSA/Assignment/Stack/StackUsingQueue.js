class StackUsingQueues {
    constructor() {
        this.queue1 = [];
        this.queue2 = [];
    }

    push(x) {
        this.queue2.push(x);
        while (this.queue1.length) {
            this.queue2.push(this.queue1.shift());
        }
        [this.queue1, this.queue2] = [this.queue2, this.queue1];
    }

    pop() {
        return this.queue1.shift();
    }

    top() {
        return this.queue1[0];
    }

    empty() {
        return this.queue1.length === 0;
    }
}

const stack = new StackUsingQueues();
stack.push(1);
stack.push(2);
console.log(stack.top());
console.log(stack.pop());
console.log(stack.empty());
