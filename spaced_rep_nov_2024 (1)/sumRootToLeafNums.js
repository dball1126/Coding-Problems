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
var sumNumbers = function(root) {
    let max = 0
    const dfs = (nde, val) => {
        if (!nde) return 0
        if (!nde.left && !nde.right) {
            return max += parseInt(val + nde.val)
        }
        dfs(nde.left, val +  nde.val)
        dfs(nde.right, val +  nde.val)
    }
    dfs(root, "")
    return max
};