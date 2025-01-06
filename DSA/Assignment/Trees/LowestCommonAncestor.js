function lowestCommonAncestor(root, p, q) {
    if (!root) return null;
    if (root.val > p.val && root.val > q.val) return lowestCommonAncestor(root.left, p, q);
    if (root.val < p.val && root.val < q.val) return lowestCommonAncestor(root.right, p, q);
    return root;
}

const root = { val: 6, left: { val: 2 }, right: { val: 8 } };
console.log(lowestCommonAncestor(root, { val: 2 }, { val: 8 }));
