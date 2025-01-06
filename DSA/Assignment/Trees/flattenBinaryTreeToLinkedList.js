function flatten(root) {
    let prev = null;
    function traverse(node) {
        if (!node) return;
        traverse(node.right);
        traverse(node.left);
        node.right = prev;
        node.left = null;
        prev = node;
    }
    traverse(root);
}

const root = { val: 1, left: { val: 2 }, right: { val: 5 } };
flatten(root);
console.log(root);

