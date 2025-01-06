class MedianFinder {
    constructor() {
        this.low = [];
        this.high = [];
    }

    addNum(num) {
        if (!this.low.length || num <= -this.low[0]) {
            this.low.push(-num);
            this.low.sort((a, b) => a - b);
        } else {
            this.high.push(num);
            this.high.sort((a, b) => a - b);
        }

        if (this.low.length > this.high.length + 1) {
            this.high.push(-this.low.shift());
        } else if (this.high.length > this.low.length) {
            this.low.push(-this.high.shift());
        }
    }

    findMedian() {
        if (this.low.length > this.high.length) return -this.low[0];
        return (-this.low[0] + this.high[0]) / 2;
    }
}

const medianFinder = new MedianFinder();
medianFinder.addNum(1);
medianFinder.addNum(2);
console.log(medianFinder.findMedian());
medianFinder.addNum(3);
console.log(medianFinder.findMedian());
