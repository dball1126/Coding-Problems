// Depth-First-Search
// Time and Space: O(n)
var diameterOfBinaryTree = function(root) {
    let max = 0;

    const dfs = (rootN) => {
        if (!rootN) return 0;
        let left = dfs(rootN.left)
        let right = dfs(rootN.right)
        max = Math.max(left, right, left + right, max)
        return Math.max(left, right) + 1
    }
    return dfs(root)
};
