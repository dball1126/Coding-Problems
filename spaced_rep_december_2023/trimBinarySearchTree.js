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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
// Recursive Depth-First-Search
// Time and Space: O(h)
var trimBST = function(root, low, high) {
    if (!root) return null;
    let left = root.left, right = root.right
    if (root.val >= low) left = trimBST(root.left, low, high)
    if (root.val <= high) right = trimBST(root.right, low, high)
    if (root.val > high) return left;
    if (root.val < low) return right;
    root.left = left;
    root.right = right;
    return root;
};

 