const checkBalanced = (n) => {
    if (!n) return true;

    const dfs = (node) => {
        if (!node) return 0;
        return 1 + Math.max(dfs(node.left), dfs(node.right))
    }
    return Math.abs(dfs(node.left) - dfs(node.right)) <= 1
}