function reverseQueue(queue) {
    const stack = [];
    while (queue.length) {
        stack.push(queue.shift());
    }
    while (stack.length) {
        queue.push(stack.pop());
    }
    return queue;
}

console.log(reverseQueue([1, 2, 3, 4, 5]));
