class PriorityQueue {
    constructor() {
        this.heap = [];
    }

    enqueue(value) {
        this.heap.push(value);
        this.bubbleUp(this.heap.length - 1);
    }

    dequeue() {
        if (this.heap.length === 1) return this.heap.pop();
        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown(0);
        return top;
    }

    bubbleUp(index) {
        while (index > 0) {
            const parent = Math.floor((index - 1) / 2);
            if (this.heap[index] >= this.heap[parent]) break;
            [this.heap[index], this.heap[parent]] = [this.heap[parent], this.heap[index]];
            index = parent;
        }
    }

    bubbleDown(index) {
        const lastIndex = this.heap.length - 1;
        while (true) {
            const left = 2 * index + 1;
            const right = 2 * index + 2;
            let smallest = index;
            if (left <= lastIndex && this.heap[left] < this.heap[smallest]) smallest = left;
            if (right <= lastIndex && this.heap[right] < this.heap[smallest]) smallest = right;
            if (smallest === index) break;
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }
}

const pq = new PriorityQueue();
pq.enqueue(5);
pq.enqueue(2);
pq.enqueue(8);
pq.enqueue(1);
console.log(pq.dequeue());
console.log(pq.dequeue());
