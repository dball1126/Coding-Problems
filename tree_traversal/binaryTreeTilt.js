/**
 * dfs, count
 * time and space O(n)
 */
var findTilt = function(n) {
    if (!n) return 0;
    let result = 0;
    const dfs = (root) => {
        if (!root) return 0
        if (!root.left && !root.right) return root.val
        let left = dfs(root.left), right = dfs(root.right)
        result += Math.abs(left - right)
        return left + right + root.val
    }
    dfs(n)
    return result;
};