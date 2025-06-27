
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number}
 */

// Recursive Depth-First-Search
// Time and Space: O(h)...height of tree
var distributeCoins = function(root) {
    let steps = 0;
    const dfs = (nde) => {
        if (!nde) return 0;
        const left = dfs(nde.left), right = dfs(nde.right)

        steps += Math.abs(left) + Math.abs(right)
        return left + right + nde.val - 1
    }
    dfs(root)
    return steps;
};
