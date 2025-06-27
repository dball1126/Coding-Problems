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
 * @param {number} k
 * @return {number}
 */
// Inorder Traversal;
// Time: O(h + k)...h for if the tree is balanced
// Space: O(h)
var kthSmallest = function(root, k) {
    let inorder = [], curr = root, stack = [];
    while (stack.length || curr) {
        while (curr && curr.left) {
            stack.push(curr);
            curr = curr.left;
        }
        if (!curr) curr = stack.pop();
        inorder.push(curr.val);
        if (inorder.length === k) return inorder[inorder.length-1];
        curr = curr.right;
    }
    return inorder[inorder.length-1]
};