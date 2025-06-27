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
    let queue = [[root]]
    let order = []
    while (queue.length) {
        let lvl = queue.shift();
        let nxLvl = []
        order.push(lvl[lvl.length-1].val)
        for (let nde of lvl) {
            if (nde.left) nxLvl.push(nde.left)
            if (nde.right) nxLvl.push(nde.right)
        }
        if (nxLvl.length) queue.push(nxLvl)
    }
    return order
};