/**
 * Recursion, max variable, dfs, one node value is a valid path
 * Time and Space: O(n)
 */
var maxPathSum = function(node) {
    let max = node.val;

    const dfs = (n) => {
        if (!n) return 0;
        if (!n.left && !n.right) {
            max = Math.max(max, n.val)
            return n.val;
        }
        let [l, r] = [0,0]

        if (n.left) l = dfs(n.left)
        if (n.right) r = dfs(n.right)

        max = Math.max(max, l + r + n.val, n.val, l + n.val, r + n.val)

        return Math.max(l + n.val, r + n.val, n.val)
    }

    dfs(node)
    return max
}
