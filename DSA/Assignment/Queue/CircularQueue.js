class CircularQueue {
    constructor(k) {
        this.queue = new Array(k);
        this.size = k;
        this.front = 0;
        this.rear = -1;
        this.count = 0;
    }

    enqueue(value) {
        if (this.isFull()) return false;
        this.rear = (this.rear + 1) % this.size;
        this.queue[this.rear] = value;
        this.count++;
        return true;
    }

    dequeue() {
        if (this.isEmpty()) return false;
        this.front = (this.front + 1) % this.size;
        this.count--;
        return true;
    }

    isFull() {
        return this.count === this.size;
    }

    isEmpty() {
        return this.count === 0;
    }

    frontElement() {
        return this.isEmpty() ? -1 : this.queue[this.front];
    }

    rearElement() {
        return this.isEmpty() ? -1 : this.queue[this.rear];
    }
}

const circularQueue = new CircularQueue(3);
console.log(circularQueue.enqueue(1));
console.log(circularQueue.enqueue(2));
console.log(circularQueue.enqueue(3));
console.log(circularQueue.enqueue(4));
console.log(circularQueue.frontElement());
circularQueue.dequeue();
console.log(circularQueue.frontElement());
