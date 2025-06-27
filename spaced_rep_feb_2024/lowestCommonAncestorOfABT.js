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
//
// Recursive Depth-First-Search
// Time and Space: O(n)
var lowestCommonAncestor = function(root, p, q) {
    let result = null;
    const dfs = (nde) => {
        if (result) return false;
        if (!nde) return false;

        let val = nde.val === p.val || nde.val === q.val;

        let left = dfs(nde.left), right = dfs(nde.right);

        if (!result) {
            if (left && right || val && left || val && right) {
                result = nde
                return false;
            }
        }
        return left || val || right
    }
    dfs(root)
    return result;
};
