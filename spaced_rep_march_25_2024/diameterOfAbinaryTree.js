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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let diameter = 0;

    const dfs = (nde) => {
        if (!nde) return 0;

        let left = dfs(nde.left), right = dfs(nde.right)

        diameter = Math.max(left + right, left, right, diameter)

        return Math.max(left, right) + 1
    }
    dfs(root)
    return diameter
};
/**
 * [1,2,3,4,5]
 *     1
 *    2  3
 *   4 5
 * 
 *  (1)
 *   2 returns 1
 * (2)
 * 
 * 
 */