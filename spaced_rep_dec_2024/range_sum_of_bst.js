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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    let rangeSum = 0

    const dfs = (nde, min, max) => {
        if (!nde) return 0
        if (nde.val >= low && nde.val <= high) {
            rangeSum += nde.val
        }
        let v1 = 0, v2 = 0
        if (nde.val > min) v1 = dfs(nde.left, min, nde.val)
        if (nde.val < max) v2 = dfs(nde.right, nde.val, max)
        return v1 + v2
    }
    dfs(root, low, high)
    return rangeSum;
};