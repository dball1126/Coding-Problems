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

// level order traversal
// Time: O(n)
// Space: O(h)...if the tree is balanced and O(n) in the worst case
var rightSideView = function(root) {
    if (!root) return [];
    let result = [], queue = [[root]];
    while (queue.length) {
        let level = queue.shift();
        result.push(level[level.length-1].val);
        let newLevel = [];
        for (let nde of level) {
            if (nde.left) newLevel.push(nde.left);
            if (nde.right) newLevel.push(nde.right);
        }
        if (newLevel.length) queue.push(newLevel)
    }
    return result;
};