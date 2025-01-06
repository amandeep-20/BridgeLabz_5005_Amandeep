function maxProduct(nums) {
    let maxProd = nums[0], minProd = nums[0], result = nums[0];
    for (let i = 1; i < nums.length; i++) {
        const temp = maxProd;
        maxProd = Math.max(nums[i], nums[i] * maxProd, nums[i] * minProd);
        minProd = Math.min(nums[i], nums[i] * temp, nums[i] * minProd);
        result = Math.max(result, maxProd);
    }
    return result;
}

console.log(maxProduct([2, 3, -2, 4]));
