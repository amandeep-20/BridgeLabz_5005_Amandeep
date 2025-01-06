function intersection(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    return Array.from(set1).filter(num => set2.has(num));
}

console.log(intersection([1, 2, 2, 1], [2, 2]));
