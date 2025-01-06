function nextGreaterElement(nums) {
    const stack = [];
    const result = Array(nums.length).fill(-1);
    for (let i = nums.length - 1; i >= 0; i--) {
        while (stack.length && stack[stack.length - 1] <= nums[i]) stack.pop();
        if (stack.length) result[i] = stack[stack.length - 1];
        stack.push(nums[i]);
    }
    return result;
}

console.log(nextGreaterElement([4, 5, 2, 10]));
console.log(nextGreaterElement([3, 2, 1]));
