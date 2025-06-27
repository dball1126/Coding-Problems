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
var verticalOrder = function(root) {
    if (!root) return []
    let minCol = 0
    let order = new Map()

    const getColDfs = (nde, col) => {
        if (!nde) return;
        minCol = Math.min(minCol, col)
        if (!order.has(col)) order.set(col, [])
        getColDfs(nde.left, col - 1)
        getColDfs(nde.right, col + 1)
    }
    getColDfs(root, 0)

    // level order traversal (we should be using a real queue)
    let queue = [[[root, 0]]]
    while(queue.length) {
        const level = queue.shift()
        const nextLevel = []

        for (let [nde, col] of level) {
            order.get(col).push(nde.val)

            if (nde.left) nextLevel.push([nde.left, col - 1])
            if (nde.right) nextLevel.push([nde.right, col + 1])
        }
        if (nextLevel.length) queue.push(nextLevel)
    }

    let result = []
    while (order.has(minCol)) {
        result.push(order.get(minCol))
        minCol++
    }
    return result;
};