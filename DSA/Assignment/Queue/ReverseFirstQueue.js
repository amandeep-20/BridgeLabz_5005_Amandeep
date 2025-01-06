function reverseFirstK(queue, k) {
    const stack = [];
    for (let i = 0; i < k; i++) stack.push(queue.shift());
    while (stack.length) queue.push(stack.pop());
    for (let i = 0; i < queue.length - k; i++) queue.push(queue.shift());
    return queue;
}

console.log(reverseFirstK([1, 2, 3, 4, 5, 6, 7, 8, 9], 5));
