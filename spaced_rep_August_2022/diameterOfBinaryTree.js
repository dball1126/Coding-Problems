/**
 * Time: O(n)
 * Space: O(h) height of tree is average   O(n) is worst case
 */
var diameterOfBinaryTree = function(root) {
    let max = 0
    const dfs = (n) => {
        if (!n) return 0;
        let left = 0, right = 0;
        if (n.left) left = dfs(n.left) + 1
        if (n.right) right = dfs(n.right) + 1
        max = Math.max(max, left, right, left + right)
        return Math.max(left, right)
    }
    dfs(root)
    return max
};