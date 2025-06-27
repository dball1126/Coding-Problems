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
 * @param {number} target
 * @return {number}
 */
// Binary Search
// Time: O(log(n))
// Space: O(h)...if the tree is balanced
var closestValue = function(root, target) {
    let min = Infinity
    let returnNode = null
    const dfs = (nde) => {
        if (!nde) return;
        let diff = Math.abs(nde.val - target)
        if (diff < min) {
            min = diff
            returnNode = nde
        } else if (diff === min && nde.val < returnNode.val) {
            returnNode = nde;
        }

        if (nde.val >= target) {
            dfs(nde.left)
        } else {
            dfs(nde.right)
        }
    }
    dfs(root)
    return returnNode.val
};
