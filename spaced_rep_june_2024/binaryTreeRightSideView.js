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
 * @return {number[]}
 */
var rightSideView = function(root) {
    if (!root) return []
    const result = []

    const queue = [[root]]
    while (queue.length) {
        let level = queue.shift()
        const newLevel = []
        level.forEach((n, i) => {
            if (i === level.length-1) result.push(n.val)
            if (n.left) newLevel.push(n.left)
            if (n.right) newLevel.push(n.right)
        })
        if (newLevel.length) queue.push(newLevel)
    }
    return result;
};