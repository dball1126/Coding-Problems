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
var diameterOfBinaryTree = function(root) {
    let maxLength = 0;
    const dfs = (nde) => {
        if (!nde) return 0;
        let left = dfs(nde.left), right = dfs(nde.right)
        maxLength = Math.max(left + right,left, right, maxLength)
        return Math.max(left, right) + 1
    }
    dfs(root)
    return maxLength
};