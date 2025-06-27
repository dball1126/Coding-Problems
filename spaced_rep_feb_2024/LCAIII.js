

/**
 * @param {Node} node
 * @return {Node}
 */
// Recursive Depth First Search
// Time: O(n)
// Space: O(h)...h for the height of the tree
//        if tree is balanced...O(n) worse case
var lowestCommonAncestor = function(p, q) {
    let pNde = false, qNde = false, result
    const getRoot = (nde) => {
        return nde.parent && nde.parent !== null ? getRoot(nde.parent) : nde
    }
    const dfs = (root) => {
        if (result) return;
        if (!root) return false;
        let left = dfs(root.left), right = dfs(root.right)
        let l = (root.val === p.val)
        let r = (root.val === q.val)
      
        if (!pNde && l) pNde = true
        if (!qNde && r) qNde = true
        if (!result) {
            if ((left && right) || (l & right) || (r && left) 
            || (r && right)
            || (l && left)) {
                result = root
            }
        }
        return left || right || l || r
    }
    dfs(getRoot(p))
    return result
};  
/**
      5
   1    10      1  10
 *  */ 