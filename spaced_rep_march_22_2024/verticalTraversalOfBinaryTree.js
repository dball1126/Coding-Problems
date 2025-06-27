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
// Depth-First-Search and Level Order Traversal
// Time: O(n* log(n))...n for nodes in root...
// Space: O(n)...for nodes in queue and map
var verticalTraversal = function(root) {
    if (!root) return [[]]
    const cols = new Map();
    let minCol = 0;

    const dfs = (nde, col) => { // get all columns // Time O(n) // Space: O(h) if tree is balanced, O(n) if not balanced
        if (!nde) return;
        if (!cols.has(col)) cols.set(col, [])
        minCol = Math.min(minCol, col)
        dfs(nde.left, col -1)
        dfs(nde.right, col + 1)
    }
    dfs(root, 0)
    const queue = [[[root, 0]]] // this should be a real queue not an array

    while (queue.length) { // O(n * log(n))
        let level  = queue.shift();
        const nextLevel = []
        const allCols = new Map()
        for (let [nde, col] of level) {
            if (!allCols.has(col)) allCols.set(col, [])
            allCols.get(col).push(nde.val)
            if (nde.left) nextLevel.push([nde.left, col - 1])
            if (nde.right) nextLevel.push([nde.right, col + 1])
        }
        for (let [col, nodes] of allCols) {
            nodes.sort((a, b) => a - b)
            cols.get(col).push(...nodes)
        }
        if (nextLevel.length) queue.push(nextLevel)
    }
    const result = []
    while (cols.has(minCol)) { // O(n)

        result.push(cols.get(minCol))
        minCol++
    }
    return result;
};
/**
        3
    9       20
 *      15

    result -1: [9], 0: [3], 1: [20]

    [[[3, 0]]]
    level = [[9, -1], [20, 1]]
    queue= [ [[9, -1], [20, 1]] ]

    next queue iteration
    level = []

    minCol = -1
    iterate over the mincols

   minCol = -1 result = [[9]]
    minCol = 0 result = [[9], [3]]
    mincol = 1 result = [[9], [3], [20]]
 */