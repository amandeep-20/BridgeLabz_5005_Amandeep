class BSTIterator {
    constructor(root) {
        this.stack = [];
        this._pushLeft(root);
    }

    _pushLeft(node) {
        while (node) {
            this.stack.push(node);
            node = node.left;
        }
    }

    next() {
        const node = this.stack.pop();
        this._pushLeft(node.right);
        return node.val;
    }

    hasNext() {
        return this.stack.length > 0;
    }
}

const root = { val: 7, left: { val: 3 }, right: { val: 15, left: { val: 9 }, right: { val: 20 } } };
const iterator = new BSTIterator(root);
console.log(iterator.next());
console.log(iterator.hasNext());
