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
    let lowestAncestor = null;

    const dfs = (nde) => {
        if (!nde || lowestAncestor) return false;
        
        let val1
        if ((p && nde.val === p.val) || q && q.val === nde.val) {
            val1 = true
        }

        let left = dfs(nde.left), right = dfs(nde.right)

        let result = ((left && right) || (val1 && left) || (val1 && right)) 
        if (!lowestAncestor && result) lowestAncestor = nde;
        return left || right || val1;
    }
    dfs(root)
    return lowestAncestor;
};