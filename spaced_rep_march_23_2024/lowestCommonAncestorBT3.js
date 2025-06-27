/**
 * // Definition for a Node.
 * function Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
// Recursive Depth-First-Search
// two pointers
var lowestCommonAncestor = function(p, q) {
    let ancestor, pNode, qNode
    let root;
    const getParent = (nde) => { // O(n) time, O(h) space if tree is balanced
        if (!nde) return;
        root = nde;
        getParent(nde.parent)
    }
    getParent(p)
    const dfs = (nde) => { // O(n) time, O(h) space if the tree is balanced
        if (ancestor || !nde) return;

        if (!pNode && nde.val === p.val) {
            pNode = nde;
        } else if (!qNode && nde.val === q.val) {
            qNode = nde;
        }

        let left = dfs(nde.left), right = dfs(nde.right)

        if ((left && nde.val === q.val) || 
            (left && nde.val === p.val) ||
            (left && right) || 
            (right && nde.val === p.val) ||
            (right && nde.val === q.val)
            ) {
            if (!ancestor) ancestor = nde;
        }

        return left || right || nde.val === q.val || nde.val === p.val;
    }
    dfs(root)
    return ancestor;
};
/**              p =  1  q = 2
 *    3
 * 1     2    pnode = 1    qNode = 2
 * 
 * 
 * 
 */

