var preorderTraversal = function(root) {
    if (!root) return []
    return [root.val, ...preorderTraversal(root.left), ...preorderTraversal(root.right)]    
};

var preorderTraversal = function(root) {
    let stack = [], curr = root, preorder = []
    while (curr || stack.length) {
        if (!curr) curr = stack.pop()
        preorder.push(curr.val)
        if (curr.right) stack.push(curr.right)
        curr = curr.left
    }
    return preorder
};