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
// Depth First Search
// Time: O(n)
// Space: O(h)...if the tree is balanced
var largestBSTSubtree = function(root) {
    let largestBST = 0;
    const dfs = (nde, min, max) => {
        if (!nde) return 0;
        let left = dfs(nde.left, min, nde.val), right = dfs(nde.right, nde.val, max);
        if (left === -Infinity || right === -Infinity) return -Infinity;
        largestBST = Math.max(largestBST, left + right + 1)
        if (nde.val <= min || nde.val >= max) return -Infinity
        return left + right + 1;
    }
    dfs(root, -Infinity, Infinity);
    return largestBST;
};

