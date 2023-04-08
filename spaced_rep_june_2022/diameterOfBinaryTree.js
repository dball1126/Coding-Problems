var diameterOfBinaryTree = function(root) {
    let max = 0;
    const dfs = (n) => {
        if (!n) return 0;
        let left = dfs(n.left)
        let right = dfs(n.right)
        max = Math.max(max, left, right, left + right)
        return Math.max(left, right) + 1;
    }
    dfs(root)
    return max
};