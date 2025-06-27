var preorderTraversal = function(root) {
    if (!root) return []
    const stack = [root], order = []
    while (stack.length) {
        nde = stack.pop()
        order.push(nde.val)
        if (nde.right) stack.push(nde.right)
        if (nde.left) {
            stack.push(nde.left)
        } else {
            nde = null
        }
    }
    return order
};