var lowestCommonAncestor = function(p, q) {
    if (!p || !q) return false
    let parent = p, found1 = null, found2 = null, result = null
    if (p && p.parent) parent = p.parent

    const dfs = (root) => {
        if (!root || result) return
        if (root.val === p.val) found1 = true;
        if (root.val === q.val) found2 = true;

        if (found1 && found2) {
            if (root.val === p.val) return result = root
            if ((root.left && root.left.val === p.val) || 
            (root.right && root.right.val === p.val)) {
                return result = root;
            }
        }
        let left = dfs(root.left)
        let right = dfs(root.right)

        if (found1 && found2) {
            if (left && left.val === p.val || right && right.val === p.val) return result = root
        }
    return root
    }
    dfs(parent)
    return result
};