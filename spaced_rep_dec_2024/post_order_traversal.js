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
    let curr = root, stack = [], postorder = []
    const top = () => stack[stack.length-1]

    while (stack.length || curr) {
        if (!curr) curr = stack.pop()

            
        
    }
    return postorder
};