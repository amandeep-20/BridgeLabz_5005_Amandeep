function diameterOfBinaryTree(root) {
    let diameter = 0;
    function depth(node) {
        if (!node) return 0;
        const left = depth(node.left);
        const right = depth(node.right);
        diameter = Math.max(diameter, left + right);
        return 1 + Math.max(left, right);
    }
    depth(root);
    return diameter;
}

const root = { val: 1, left: { val: 2, left: { val: 4 }, right: { val: 5 } }, right: { val: 3 } };
console.log(diameterOfBinaryTree(root));
