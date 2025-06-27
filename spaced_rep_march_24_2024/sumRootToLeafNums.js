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
// Binary Tree Traversal, Depth-First-Search
// Time: O(n)
// Space: O(h) if the tree is balanced...O(n) in the worst case.
var sumNumbers = function(root) {
    let allSums = 0;

    const dfs = (nde, sum) => {
        if (!nde) 0
        if (!nde.left && !nde.right) return allSums += parseInt(sum + nde.val)
         dfs(nde.left, sum + nde.val)
        dfs(nde.right, sum + nde.val)
    }
    dfs(root, "")
    return allSums
};

/**
 * [1, 0]
 * 
 * 2 12
 * 
 * null 3
 * 
 * 
 */