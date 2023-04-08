/**
 * DFS, recursion
 * Time and Space: O(n) n for nodes
 */
var isValidBST = function(root) {
    const dfs = (n, mL, mR) => {
        if (!n) return true;
        if (!(n.val > mL) || !(n.val < mR)) return false;
        return dfs(n.left, mL, n.val) && dfs(n.right, n.val, mR)
    }
    return dfs(root, -Infinity, Infinity)
};