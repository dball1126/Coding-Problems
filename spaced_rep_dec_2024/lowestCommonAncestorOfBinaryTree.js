/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// Time: O(n)...wrose case traverse all nodes
// Space: O(h)...if the tree is balanced...O(n) in the worse case due to recursive call stack
var lowestCommonAncestor = function(root, p, q) {
    let result = null;
    const dfs = (nde) => {
        if (!nde || result) return false;
        let left = dfs(nde.left), right = dfs(nde.right);
        let value = false;
        if (nde === p || nde === q) {
            value = true;
        }
        if (!result) {
            if (left && right || left && value || right && value) {
                result = nde;
            }
        }
        return value || left || right;
    }
    dfs(root);
    return result;
};