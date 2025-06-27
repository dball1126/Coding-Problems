/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// In-order traversal
// Time: O(n)...O(n + (w * log(w)))...w for width of tree but n dominates w * log(w)
var verticalOrder = function(root) {
    const columns = new Map();

    const dfs = (node, col) => {
        if (!node) return;

        if (!columns.has(col)) columns.set(col, [])
        columns.get(col).push(node.val)

        dfs(node.left, col - 1)
        dfs(node.right, col + 1)
    }
    dfs(root, 0)

    const arr =  Array.from(columns).sort((a,b) => a[0] - b[0])
    return arr.map(a => a[1])
};

