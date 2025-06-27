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
// Depth-First-Search
// Time & Space: O(n)
var maxPathSum = function(root) {
    let max = -Infinity;

    const dfs = (nde) => {
        if (nde === undefined || nde === null) return -Infinity;
        let left = dfs(nde.left), right = dfs(nde.right)
        max = Math.max(left, right, nde.val, left+nde.val, right + nde.val,
            left + right + nde.val, max)
        return Math.max(nde.val, left + nde.val, right+nde.val)
    }
    dfs(root)
    return max;
};
