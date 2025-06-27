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
 * @return {number[]}
 */
// Left, Root, Right
var inorderTraversal = function(root) {
    let inorder = [], stack = [], curr = root;

    while (stack.length || curr) {
        while (curr && curr.left) {
            stack.push(curr)
            curr = curr.left;
        }
        if (!curr) curr = stack.pop();
        inorder.push(curr.val)
        curr = curr.right
    }
    return inorder
};
