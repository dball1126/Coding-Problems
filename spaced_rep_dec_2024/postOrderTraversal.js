
// Postorder Traversal
// LEFt, RIGHT, ROOT
// Recursive
var postorderTraversal = function(root) {
    if (!root) return []
    return [...postorderTraversal(root.left), ...postorderTraversal(root.right), root.val]
}
var postorderTraversal = function(root) {
    let curr = root, stack = [], postorder = []
    const top = () => postorder[postorder.length=1]
    while (stack.length || curr) {
        if (curr) {
            let right = curr.right
            let left = curr.left
            if (right && right !== top()) {
                stack.push(curr)
                curr = right
            }
            if (left && left !== top()) {
                stack.push(curr)
                curr = left
            }
        }
        postorder.push(curr.val)
        curr = null
    }

    return postorder
};