/**
 * DFS
 * Time and space O(n)
 */
var maxPathSum = function(n) {
    let sum = -Infinity;
    const dfs = (node) => {
        if (!node) return 0;
        let left = -Infinity
        let right = -Infinity
        if(node.left) left = dfs(node.left)
        if (node.right) right = dfs(node.right)

        sum = Math.max(sum, left, right, left + node.val, 
            right + node.val, left + right + node.val, node.val);

        return Math.max(node.val, node.val + left, node.val + right);
    }
    dfs(n)
    return sum;
};