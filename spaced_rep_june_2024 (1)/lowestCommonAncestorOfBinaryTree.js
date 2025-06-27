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
// Recursive Depth-First-Search
// Time: O(n)
// Space: O(h) if the tree is balanced.
var lowestCommonAncestor = function(root, p, q) {
    let result

    const dfs = (nde) => {
        if (!nde) return

        let left = dfs(nde.left), right = dfs(nde.right)
        let val = (p && nde.val === p.val) || (q && nde.val === q.val)
        if (!result) {
            if ((left && right) || (val && left) || (val && right)) {
                result = nde;
            }
        }

        return left || right || nde.val === p.val || nde.val === q.val
    }
    dfs(root)
    return result;
};
