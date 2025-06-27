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
    if (!root) return [[]]
    let leftWidth = Infinity, rightWidth = -Infinity;
    const getWidth = (nde, width) => {
        if (!nde) return;
        leftWidth = Math.min(width, leftWidth);
        rightWidth = Math.max(width, rightWidth);
        getWidth(nde.left, width-1)
        getWidth(nde.right, width+1)
        return Math.max(width,left,right)
    }
    let width = Math.abs(leftWidth) + rightWidth + 1;
    let offSet = Math.abs(leftWidth)
    let order = [...new Array(width)].map(a => []);
    let queue = [[[root, 0]]];
    while (queue.length) {
        let [level] = queue.shift();
        let newLevel = [];
        for (let [nde, w] of level) {
            let idx = w + offSet;
            order[idx].push(nde.val);
            if (nde.left) newLevel.push([nde.left, w-1]);
            if (nde.right) newLevel.push([nde.right, w+1]);
        }
        if (newLevel.length) queue.push(newLevel)
    }
    return order;
};