function topKFrequent(nums, k) {
    const map = new Map();
    nums.forEach(num => map.set(num, (map.get(num) || 0) + 1));
    return Array.from(map.entries())
        .sort((a, b) => b[1] - a[1])
        .slice(0, k)
        .map(entry => entry[0]);
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
