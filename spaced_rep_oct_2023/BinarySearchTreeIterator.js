/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
    this.inorder = [];
    this.root = root;
    this.idx = -1
    let stack = [], curr = root;
    while (curr || stack.length) {
        while (curr && curr.left) {
            stack.push(curr)
            curr = curr.left
        }
        if (!curr) curr = stack.pop();
        this.inorder.push(curr.val)
        curr = curr.right;
    }
    return null;
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    this.idx +=1
    if (this.idx >= this.inorder.length) return null
    return this.inorder[this.idx]
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.idx+1 < this.inorder.length
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */