/**
 * Time and Space: O(n)
 */
var pruneTree = function(root) {
    if (!root) return null;
    let result = root;

    let dfs = (n) => {
       if (!n) return false;
       if (!n.left && !n.right && n.val === 0) return false;

        let left = dfs(n.left), right = dfs(n.right)
       
        if (left && right && n.val === 1) return true;

        if (!left) n.left = null
        if (!right) n.right = null

        if (left || right || n.val === 1) return true;
        return false;
    }
    dfs(root)
    if (!result.left && !result.right && result.val === 0) return null
    return result;
}