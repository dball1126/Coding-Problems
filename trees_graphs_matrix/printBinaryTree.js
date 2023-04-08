/**
 * Depth-First-Search
 * Time: O(max(n, r * c)) = O(r * c)...rows * cols. Rows * cols dominates N nodes.
 * Space: O(n)...for recursive call stack...we're not counting the output matrix
 */
var printTree = function(root) {

    const getHeight = (node) => {
        if (!node || (!node.left && !node.right)) return 0;
        return Math.max(getHeight(node.left), getHeight(node.right)) + 1
    }
    const r = getHeight(root)
    const c = (2**(r + 1)) - 1
    const matrix = [...new Array(r + 1)].map(a => [...new Array(c)].fill(""))

    const dfs = (node, row, col) => {
        if (!node) return "";
        matrix[row][col] = node.val.toString();

        dfs(node.left, row + 1, col - (2**(r - row - 1)))
        dfs(node.right, row + 1, col + (2**(r - row - 1)))
    }

    dfs(root, 0, Math.floor((c - 1) / 2))
    return matrix
};
