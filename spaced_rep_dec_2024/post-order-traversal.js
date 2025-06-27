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
var postorderTraversal = function(root) {
    if (!root) return []
    let curr = root, stack = [], postorder = []
    const top = () => postorder[postorder.length-1]
    while (stack.length || curr) {
        while (curr && curr.left && curr.left.val === top()) {
            stack.push(curr)
            curr = curr.left
        }
        if (!curr) curr = stack.pop()
        if (curr.right && curr.right.val !== top()) {
            stack.push(curr)
            curr = curr.right
        } else {
            postorder.push(curr.val)
            curr = null
        }
    }
    return postorder
};