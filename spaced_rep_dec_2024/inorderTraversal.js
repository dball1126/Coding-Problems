// Inorder Traversal
// LEFT, ROOT, RIGHT
// Recursive
var inorderTraversal = function(root) {
    if (!root) return []
    return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)]
};
// Iterative
var inorderTraversal = function(root) {
    let curr = root, stack = [], inorder = []
    while (stack.length || curr) {
        while (curr && curr.left) {
            stack.push(curr)
            curr = curr.left
        }
        if (!curr) curr = stack.pop()
        inorder.push(curr.val)
        curr = curr.right
    }
    return inorder
}

