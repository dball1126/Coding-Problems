/**
 * DFS and Recursion
 */
var maxPathSum = function(root) {

    const dfs = (node) => {
        if (!node) return 0;
        let v = node.val;
        return Math.max(node.val + dfs(node.left) + dfs.node.right, dfs(node.left), dfs.node.right)
    }
    return dfs(root)
}