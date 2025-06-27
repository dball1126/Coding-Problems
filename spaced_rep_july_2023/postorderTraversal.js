var postorderTraversal = function(root) {
    let stack = [], curr = root, postorder = []
    while (curr || stack.length) {
        while (curr && curr.left) {
            stack.push(curr)
            curr = curr.left
        }
        if (!curr) curr = stack.pop()
        let prev = postorder[postorder.length-1]
        if (curr.right && curr.right.val !== prev) {
            stack.push(curr)
            curr = curr.right
        } else {
            postorder.push(curr.val)
            curr = null
        }
    }
    return postorder
};