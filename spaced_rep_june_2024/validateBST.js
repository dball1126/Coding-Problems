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
 * @return {boolean}
 */
// Recursive Depth-First-Search
// Time: O(n)
// Space: O(h)...h for height of tree...if the tree is balanced
var isValidBST = function(root) {
    
    const dfs = (nde, min, max) => {
        if (!nde) return true;

        if (nde.val <= min || nde.val >= max) return false;

        let left = dfs(nde.left, min, nde.val), right = dfs(nde.right, nde.val, max)

        return left && right
    }
    return dfs(root, -Infinity, Infinity)
};


