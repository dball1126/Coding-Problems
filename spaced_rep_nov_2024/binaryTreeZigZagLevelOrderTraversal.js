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
var zigzagLevelOrder = function(root) {
    if (!root) return []
    let zigZagOrder = [], queue = [[[root], "l"]] // using an array to simulate a queue

    while (queue.length) {
        const [level, dir] = queue.shift()
        const nextLevel = [], values = []

        for (let nde of level) {
            values.push(nde.val)
            if (nde.left) nextLevel.push(nde.left)
            if (nde.right) nextLevel.push(nde.right)
        }
        if (nextLevel.length) {
            queue.push([nextLevel, dir === "l" ? "r" : "l"])
        }
        if (dir === 'l') {
            zigZagOrder.push(values)
        } else {
            zigZagOrder.push(values.reverse())
        }
    }

    return zigZagOrder
};