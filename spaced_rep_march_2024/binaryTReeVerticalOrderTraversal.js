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

// Depth First Search / Level Order Traversal
// Time and Space: O(n)...if we use a real queue(the unshift operator runs at n time)
var verticalOrder = function(root) {
    if (!root) return []
    let cols = new Set(), minCol = Infinity;

    const getCols = (node, col) => {
        if (!node) return;
        minCol = Math.min(minCol, col)
        cols.add(col)

        getCols(node.left, col - 1)
        getCols(node.right, col + 1)
    }
    getCols(root, 0)

    let result = [...new Array(cols.size)].map(a => [])
    let queue = [[[root, 0]]]
    while (queue.length) {
        let level = queue.shift(), nextLevel = []

        for (let [n, c] of level) {
            result[c + Math.abs(minCol)].push(n.val)
            if (n.left) nextLevel.push([n.left, c - 1])
            if (n.right) nextLevel.push([n.right, c + 1])
        }
        if (nextLevel.length) queue.push(nextLevel)
    }
    return result
};

