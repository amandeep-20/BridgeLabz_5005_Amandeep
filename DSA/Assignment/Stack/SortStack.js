function sortStack(stack) {
    const tempStack = [];
    while (stack.length) {
        const temp = stack.pop();
        while (tempStack.length && tempStack[tempStack.length - 1] > temp) {
            stack.push(tempStack.pop());
        }
        tempStack.push(temp);
    }
    while (tempStack.length) {
        stack.push(tempStack.pop());
    }
    return stack;
}

console.log(sortStack([34, 3, 31, 98, 92, 23]));
