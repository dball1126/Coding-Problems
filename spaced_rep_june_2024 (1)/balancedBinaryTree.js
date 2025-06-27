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
 * @return {boolean}
 */
// Recursive Depth-First-Search
// Time: O(n)
// Space: O(h) if the tree is balanced
var isBalanced = function(root) {
    let balanced = true;
    const dfs = (nde) => {
        if (!nde || !balanced) return 0
        let left = dfs(nde.left), right = dfs(nde.right)
        if ((Math.abs(left - (right))) > 1) {
            balanced = false;
        }
        return Math.max(left, right) + 1
    }
    dfs(root)
    return balanced
};

