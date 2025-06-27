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
    if (!root) return [];
    let result = [];
    let queue = [[[root], "left"]];
    while (queue.length) {
        let [level, dir] = queue.shift();
        let newLevel = [];
        let output = [];
        for (let nde of level) {
            output.push(nde.val);
            if (nde.left) newLevel.push(nde.left);
            if (nde.right) newLevel.push(nde.right);
        }
        if (newLevel.length) queue.push([newLevel, dir === "left" ? "right" : "left"]);
        dir === "left" ? result.push(output) : result.push(output.reverse());
    }
    return result;
};