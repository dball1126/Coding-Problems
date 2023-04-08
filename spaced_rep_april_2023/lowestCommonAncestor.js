
// Recursive Depth-First-Search
// Time and Space: O(n)
var lowestCommonAncestor = function(root, p, q) {
    let lca = null;
    const dfs = (root) => {
        if (!root) return false;

        let mid = root.val === p.val || root.val === q.val;
        let left = dfs(root.left)
        let right = dfs(root.right)
        let result = left && right || mid && left || mid && right;
        if (result) {
            if (!lca) lca = root;
            if (lca) return;
        }
        return result || mid || left || right
    }
    dfs(root)
    return lca
};
