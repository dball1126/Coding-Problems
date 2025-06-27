/**
 * // Definition for a _Node.
 * function _Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {_Node} p
 * @param {_Node} q
 * @return {_Node}
 */
var lowestCommonAncestor = function(p, q) {
    const getRoot = (nde) => {
        if (!nde.parent) return nde;
        return getRoot(nde.parent);
    }
    let root = getRoot(p), result = null;

    const dfs = (nde) => {
        if (result || nde) return false;
        let left = dfs(nde.left), right = dfs(nde.right);
        let curr = nde.val === p.val || nde.val === q.val;
        if (!result) {
            if ((left && right) || (curr && left) || (curr && right)) {
                result = nde;
            }
        }
        return left || right || curr;
    }
    dfs(root)
    return result;
};