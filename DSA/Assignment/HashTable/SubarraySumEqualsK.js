function subarraySum(nums, k) {
    const map = new Map();
    map.set(0, 1);
    let count = 0, sum = 0;
    for (const num of nums) {
        sum += num;
        if (map.has(sum - k)) count += map.get(sum - k);
        map.set(sum, (map.get(sum) || 0) + 1);
    }
    return count;
}

console.log(subarraySum([1, 1, 1], 2));
