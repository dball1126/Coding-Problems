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
 * @return {number}
 */
// Recursive Depth-First-Search
// Time: O(n)
// Space: O(h)...if tree is balanced...O(n) worst case
var averageOfSubtree = function(root) {
    let nodeCount = 0
    
    const dfs = (nde) => {
        if (!nde) return [0, 0]
        
        let [lSum, lCount] = dfs(nde.left);
        let [rSum, rCount] = dfs(nde.right);

        let totalCount = lCount + rCount + 1
        let totalSum = nde.val + lSum + rSum;

        if (Math.floor(totalSum / totalCount) === nde.val) {
            nodeCount++
        }
        return [totalSum, totalCount]
    }
    dfs(root)
    return nodeCount;
};


