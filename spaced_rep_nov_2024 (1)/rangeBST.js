/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    
    const dfs = (nde, min, max) => {
        if (!nde) return 0;
        let result = (nde.val >= low && nde.val <= high )? nde.val : 0;

        if ((nde.val >= low && low <= max) || (high >= nde.val || high <= max )) {
            result += dfs(nde.right, nde.val, max)
        }
        if ((min >= low && low <= nde.val) || (high >= min || high <= nde.val )) {
            result += dfs(nde.left, min, nde.val)
        }
        return result
    }

    return dfs(root, -Infinity, Infinity)
};

// Recursive Depth-First-Search.
// Time & Space: O(n)
var rangeSumBST = function(root, low, high) {
    const dfs = (nde) => {
        if (!nde) return 0; // base case
        let result = (nde.val >= low && nde.val <= high )? nde.val : 0;
        if (high > nde.val ) {
            result += dfs(nde.right)
        }
        if (low < nde.val) {
            result += dfs(nde.left)
        }
        return result
    }
    return dfs(root, -Infinity, Infinity)
};

