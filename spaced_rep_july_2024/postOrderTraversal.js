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
// Left, Right, Root
// var postorderTraversal = function(root) {
//     if (!root) return []
//     return [...postorderTraversal(root.left), ...postorderTraversal(root.right), root.val]
// }

var postorderTraversal = function(root) {
    let stack = [], curr = root, postorder = []

    while (stack.length || curr) {
        if (!curr) curr = stack.pop()
        let prev = postorder[postorder.length-1] || null
        let temp = curr
        if (curr.right) {
            if (prev === null || prev !== curr.right.val) {
                postorder.push(curr)
                curr = curr.right
            }
        }
        if (temp.left) {
            if (prev === null || prev !== temp.left.val) {
                postorder.push(curr)
            }
            curr = temp.left
        }
        if (temp !== curr || (curr.left === null && curr.right === null)) {
            postorder.push(curr.val)
            curr = null;
        }
    }
    return postorder
}