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
// Time: O(n)
// Space: O(h)...if the tree is balanced otherwise O(n)
var diameterOfBinaryTree = function(root) {
    let maxDiameter = 0;
    const dfs = (nde) => {
        if (!nde) return 0;
        let left = dfs(nde.left), right = dfs(nde.right);
        maxDiameter = Math.max(maxDiameter, left + right, left, right);
        return Math.max(left, right) + 1
    }
    dfs(root);
    return maxDiameter;
};