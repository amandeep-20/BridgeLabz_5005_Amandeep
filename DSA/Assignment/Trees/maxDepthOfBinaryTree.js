function maxDepth(root) {
    if (!root) return 0;
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}

const root = { val: 1, left: { val: 2 }, right: { val: 3 } };
console.log(maxDepth(root));

