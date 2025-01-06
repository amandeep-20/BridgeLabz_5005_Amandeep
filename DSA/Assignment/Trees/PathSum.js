function hasPathSum(root, targetSum) {
    if (!root) return false;
    if (!root.left && !root.right) return root.val === targetSum;
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
}

const root = { val: 5, left: { val: 4, left: { val: 11, left: { val: 7 }, right: { val: 2 } } }, right: { val: 8 } };
console.log(hasPathSum(root, 22));
convertSortedArrayToBST.js