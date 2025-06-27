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
// Depth-First-Search
// Time: O(n)
// Space: O(h)...for height of the tree if its balanced
var sumNumbers = function(root) { // recursive
    let totalSum = 0
    const dfs = (nde, sum) => {
        if (!nde) return totalSum += parseInt(sum)
        if (!nde.left && !nde.right) return totalSum += parseInt(sum + nde.val)
        if (nde.left) dfs(nde.left, sum + nde.val)
        if (nde.right) dfs(nde.right, sum + nde.val)
    }
    dfs(root, "")
    return totalSum
};
var sumNumbers = function(root) { // iterative
    if (!root) return 0
    let totalSum = 0, stack = [[root, ""]]
    while (stack.length) {
        let [nde, sum] = stack.pop();
        if (!nde.left && !nde.right) {
            totalSum += parseInt(sum + nde.val)
            continue;
        }
        if (nde.left) stack.push([nde.left, sum + nde.val])
        if (nde.right) stack.push([nde.right, sum + nde.val])
    }
    return totalSum
};
