/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {TreeNode}
 */

// Recursion, Dept-First-Search
// Time and Space: (n)
var removeLeafNodes = function(root, target) {
    const dfs = (nde) => {
        if (!nde) return null
        if (nde.val == target && !nde.left && !nde.right) {
            return nde = null
        } else if (!nde.left && !nde.right) {
            return nde;
        }

        let left = dfs(nde.left), right = dfs(nde.right)

        if (!left && !right && nde.val === target) {
            return nde = null;
        }

        nde.left = left, nde.right = right
        return nde
    }   
    return dfs(root) 
};