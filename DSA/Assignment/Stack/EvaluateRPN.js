function evaluateRPN(tokens) {
    const stack = [];
    for (const token of tokens) {
        if (!isNaN(token)) stack.push(Number(token));
        else {
            const b = stack.pop();
            const a = stack.pop();
            stack.push(eval(`${a} ${token} ${b}`));
        }
    }
    return stack.pop();
}

console.log(evaluateRPN(["2", "1", "+", "3", "*"]));
console.log(evaluateRPN(["4", "13", "5", "/", "+"]));
