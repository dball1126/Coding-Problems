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
// left right, root
// var postorderTraversal = function(root) {
//    if (!root) return []
//    return [...postorderTraversal(root.left), ...postorderTraversal(root.right), root.val] 
// };

var postorderTraversal = function(root) {
    let curr = root, stack = [], postorder = []

    while (curr || stack.length) {
        let prev = null
        if (postorder.length) {
            prev = postorder[postorder.length-1]
        }
        while (curr & curr.left) {
            if (curr.left === prev) break;
            stack.push(curr)
            curr = curr.left
        }
        if (!curr) curr = stack.pop()
        if (curr.right &&  curr.right !== stack[stack.length-1] && curr.right !== postorder[postorder.length-1]) {
            stack.push(curr)
            curr = curr.right
        } else {
            postorder.push(curr.val)
            curr = null
        }
        postorder.push(curr.val)
    }
    return postorder
}