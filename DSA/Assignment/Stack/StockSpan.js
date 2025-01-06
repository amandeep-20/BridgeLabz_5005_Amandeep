function stockSpan(prices) {
    const stack = [];
    const span = [];
    for (let i = 0; i < prices.length; i++) {
        while (stack.length && prices[stack[stack.length - 1]] <= prices[i]) stack.pop();
        span[i] = stack.length ? i - stack[stack.length - 1] : i + 1;
        stack.push(i);
    }
    return span;
}

console.log(stockSpan([100, 80, 60, 70, 60, 75, 85]));
