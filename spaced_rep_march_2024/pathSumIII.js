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
 * @param {number} targetSum
 * @return {number}
 */
// Depth-First-Search
// Time O(n^2)
// Space: O(h)...if the tree is balanced...O(n) worst case
var pathSum = function(root, targetSum) {
    let count = 0;
    
    const dfs = (nde, isRoot) => {
        if (!nde) return []

        let left = dfs(nde.left, false), right = dfs(nde.right, false)
        let paths = []
        // handle left nodes
        for (let [v, len] of left) {
            if (isRoot) {
                if (v + nde.val === targetSum) count++
            }
            if (v === targetSum) count++
            paths.push([v + nde.val, len + 1])
        }
        // handle right nodes
        for (let [v, len] of right) {
            if (isRoot) {
                if (v + nde.val === targetSum) count++
            }
            if (v === targetSum) count++;
            paths.push([v + nde.val, len + 1])
        }
        if (nde.val === targetSum && isRoot) count++
        paths.push([nde.val, 1])
        return paths
    }
    dfs(root, true)
    return count;
};