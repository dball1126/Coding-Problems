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
var levelOrder = function(root) {
    if (!root) return []
    let queue = [[root]], levelorder = []

    while (queue.length) {
        let level = queue.shift()
        let nextLevel = []
        let values = []
        for (let nde of level) {
            if (nde.left) nextLevel.push(nde.left)
            if (nde.right) nextLevel.push(nde.right)
            values.push(nde.val)
        }
        if (nextLevel.length) queue.push(nextLevel)
        if (values.length) levelorder.push(values)
    }
    return values
};