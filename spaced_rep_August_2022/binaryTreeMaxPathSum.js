var maxPathSum = function(root) {
    if (!root) return 0
    let max = root.val;
    const dfs = (node) => {
        if (!node.left && !node.right) return node.val
        let left = -Infinity, right = -Infinity
        if (node.left) left = dfs(node.left)
        if (node.right) right = dfs(node.right)
        if (node.left && node.right) {
            max = Math.max(max, right, left, node.val + left + right, node.val + left, node.val + right)
        } else if (node.left) {
            max = Math.max(max, left, node.val + left , node.val + left, node.val )
        } else if (node.right) {
            max = Math.max(max, right, node.val + right, node.val , node.val + right)
        }
        return Math.max(node.val, node.val + right, node.val + left)
    }
    dfs(root)
    return max
};

max = Math.max(max)