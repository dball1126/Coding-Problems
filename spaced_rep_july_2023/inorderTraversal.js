var inorderTraversal = function(root) {
    if (!root) return []
    return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)]    
};

var inorderTraversal = function(root) {
    let stack = [], curr = root, inorder = []
    while (curr || stack.length) {
        while (curr && curr.left) {
            stack.push(curr)
            curr = curr.left
        }
        if (!curr) curr = stack.pop()
        inorder.push(curr.val)
        curr = curr.right
    }
    return inorder
};