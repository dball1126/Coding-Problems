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
// Recurisve Depth-First-Search
// Time: O(n)
// Space: O(h)...h for height of a balanced tree...O(n) in the worse case
var diameterOfBinaryTree = function(root) {
    let result = 0
    
    let dfs = (node) => {
        if (!node) return 0;

        let left = dfs(node.left), right = dfs(node.right)
        result = Math.max(result, left, right, left + right)
        return Math.max(left, right) + 1
    }
    dfs(root)
    return result
};

