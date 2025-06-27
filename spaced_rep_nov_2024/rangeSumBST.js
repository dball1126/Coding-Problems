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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    if (!root) return 0
    let sum = 0;

    let stack = [root]

    while (stack.length) {
        let nde = stack.pop();

        if (nde.val >= low && nde.val <= high) {
            sum += nde.val
        }
        if (nde.left && nde.val-1 >= low) stack.push(nde.left)
        if (nde.right && nde.right.val+1 <= high ) stack.push(nde.right)
    }

    return sum
};