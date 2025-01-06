function isSymmetric(root) {
    function isMirror(t1, t2) {
        if (!t1 && !t2) return true;
        if (!t1 || !t2) return false;
        return t1.val === t2.val && isMirror(t1.left, t2.right) && isMirror(t1.right, t2.left);
    }
    return isMirror(root, root);
}

const root = {
    val: 1,
    left: { val: 2, left: null, right: { val: 3 } },
    right: { val: 2, left: { val: 3 }, right: null }
};
console.log(isSymmetric(root));
