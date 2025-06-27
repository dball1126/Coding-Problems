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
// Space: O(h) if the tree is balanced.
var maxDepth = function(root) {
    if (!root) return 0
    return Math.max (maxDepth(root.left), maxDepth(root.right)) + 1
};

