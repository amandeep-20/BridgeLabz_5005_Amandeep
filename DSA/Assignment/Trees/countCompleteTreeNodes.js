function countNodes(root) {
    if (!root) return 0;
    return 1 + countNodes(root.left) + countNodes(root.right);
}

const root = { val: 1, left: { val: 2 }, right: { val: 3 } };
console.log(countNodes(root));
