/**
 * recursion, dfs, max variable
 * time and space O(n)
 */
var diameterOfBinaryTree = function(root) {
    let max = 0;
    let dfs = (node) => {
        if (!node) return 0;
        let [l, r] = [0,0]
        if (node.left) l = 1 + dfs(node.left)
        if (node.right) r = 1 + dfs(node.right)
        max = Math.max(max, l+r)
        return Math.max(l,r)
    }
    dfs(root)
    return max;
};