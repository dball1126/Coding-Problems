/**
 * DFS
 * Use recursion
 * Keep max value outside recursive loop
 * Time: O(n)
 * Space: O(h) height of tree
 */
var maxPathSum = function(root) {
    let max = root.val;

    const dfs = (n) => {
        if (!n.left && !n.right) return n.val;

        let left = n.left ? dfs(n.left) : -Infinity
        let right = n.right ? dfs(n.right) : -Infinity
        max = Math.max(max, left, right, n.val, left + right + n.val, left + n.val, n.val + right)
        return Math.max(left + n.val, right + n.val, n.val)
    }
    dfs(root)
    return max
}