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
// Time and Space: O(n)
var lowestCommonAncestor = function(root, p, q) {
    let ancestor = null;
    const dfs = (nde) => {
        if (!nde) return false;
        let left = dfs(nde.left), right = dfs(nde.right)
        if (!ancestor &&   ((left && right) || (nde.val === p?.val && right) || 
            nde.val == q?.val && left) || (nde.val === q?.val && right) || 
            (nde.val === p?.val && left)) {
                ancestor = nde
            }
        let result = false
        if (left || right || nde.val === p?.val || nde.val === q?.val) {
            result = true
        }
        return result
    }
    dfs(root)
    return ancestor;
};

