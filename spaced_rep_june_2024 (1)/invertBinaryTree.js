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
 * @return {TreeNode}
 */
// Depth-First-Search
// Time and Space: O(n) ...n for the number of nodes in the tree
var invertTree = function(root) {
    
    const dfs = (node) => {
        if (!node) return node;
        let left = dfs(node.left), right = dfs(node.right)
        node.right = left; node.left = right;
        return node;
    }
    return dfs(root)
};
