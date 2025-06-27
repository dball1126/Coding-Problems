
// Preorder Traversal ROOT, LEFT, RIGHT
// Recursive
var preorderTraversal = function(root) {
    if (!root) return []
    return [root.val, ...preorderTraversal(root.left), ...preorderTraversal(root.right)]
};
// Iterative
var preorderTraversal = function(root) {
    let curr = root, stack = [], preorder = []
    while (stack.length || curr) {
        if (!curr) curr = stack.pop()
        preorder.push(curr.val)
        if (curr.right) stack.push(curr.right)
        curr = curr.left
    }
    return preorder
};