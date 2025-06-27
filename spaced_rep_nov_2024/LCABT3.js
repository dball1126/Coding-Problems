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

// Recursive Depth-First-Search
// Time: O(n)
// SpacE: O(h)...if the tree is balanced
var lowestCommonAncestor = function(p, q) {

    const getParent = (n) => !n.parent ? n : getParent(n.parent)

    let n1 = getParent(p), result = null

    const dfs = (n) => {
        if (!n || result) return false

        let left = dfs(n.left), right = dfs(n.right)
        let curr = false;

        if (q.val === n.val || p.val === n.val) {
            curr = true;
        }
        if (!result) {
            if (left && right ||
                left && curr ||
                right && curr) {
                    result = n
                }
        }
        return left || right || curr
    }
    dfs(n1)
    return result;
};
