var largestBSTSubtree = function(root) {
    if (!root) return 0;
    let maxX = 1;
    const dfs = (n, max, min) => {
        if (!n) return 0;
        if (!n.left && !n.right) return 1;
        let val = 1;
        if (n.val > max || n.val < min) val = -Infinity

       let left = dfs(n.left, n.val, min), right = dfs(n.right, max, n.val)
       maxX = Math.max(maxX, left, right, left + val + right)
       return val + left + right
    }
    maxX = Math.max(maxX, dfs(root, Infinity, -Infinity))
    return largest
};