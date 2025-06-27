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
var lowestCommonAncestor = function(root, p, q) {
    let result = null;
    const dfs = (nde) => {
        if (!nde || result) return false;
        let left = dfs(nde.left), right = dfs(nde.right);
        let curr = p.val === nde.val || q.val === nde.val
        if (!result) {
            if ((left && right) || (curr && right) || (curr && left)) {
                result = nde;
            }
        }
        return left || right || curr;
    }
    dfs(root)
    return result;
};