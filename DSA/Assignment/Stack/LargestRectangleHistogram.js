function largestRectangleArea(heights) {
    const stack = [];
    let maxArea = 0;
    for (let i = 0; i <= heights.length; i++) {
        while (stack.length && (i === heights.length || heights[stack[stack.length - 1]] >= heights[i])) {
            const height = heights[stack.pop()];
            const width = stack.length ? i - stack[stack.length - 1] - 1 : i;
            maxArea = Math.max(maxArea, height * width);
        }
        stack.push(i);
    }
    return maxArea;
}

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]));
