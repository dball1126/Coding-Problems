var preorderTraversal = function(root) {
    if (!root) return []
    let stack = [root], result = []
    while (stack.length) {
        let n = stack.pop();
        result.push(n.val)
        if (n.right) stack.push(n.right)
        if (n.left) stack.push(n.left)
    }
    return result;
};