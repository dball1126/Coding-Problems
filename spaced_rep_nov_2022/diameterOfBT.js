var diameterOfBinaryTree = function(root) {
    let max = 0;
    const dfs = (node) => {
        if (!node || (!node.left && !node.right)) return 0
        let left = 0, right = 0
        if (node.left) left = dfs(node.left) + 1
        if (node.right) right = dfs(node.right) + 1

        max = Math.max(max, left, right, left + right)

        return Math.max(left, right)
    }
    dfs(root)
    return max
};
