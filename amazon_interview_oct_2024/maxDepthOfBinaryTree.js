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
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) return 0
    let max = 0, stack = [[root, 1]]

    while (stack.length) {
        let [nde, lvl] = stack.pop()
        max = Math.max(max, lvl)
        if (nde.left) stack.push([nde.left,lvl+1])
        if (nde.right) stack.push([nde.right,lvl+1])
    }
    return max
};