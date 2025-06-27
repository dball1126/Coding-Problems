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
// Recursive Depth-First-Search
// Time: O(n)
// Space: O(h) if tree is balanced
var diameterOfBinaryTree = function(root) {
    if (!root) return 0
    if (!root.left && !root.right) return 0
    let diameter = 0

    const dfs = (nde) => {
        if (!nde) return 0



        let left = dfs(nde.left), right = dfs(nde.right)
        diameter = Math.max(left, right, left + right)

        return Math.max(left, right) + 1
    }
    dfs(root)

    return diameter
};

