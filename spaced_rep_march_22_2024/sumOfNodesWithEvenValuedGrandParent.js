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
// O(h) space...height of balanced tree
var sumEvenGrandparent = function(root) {
    let sum = 0

    const dfs = (nde, parent, grandParent) => {
        if (!nde) return // base case

        if (grandParent && (grandParent.val % 2 === 0)) {
            sum += nde.val
        }
        let newGrandParent = parent ? parent : null;
        dfs(nde.left, nde, newGrandParent)
        dfs(nde.right, nde, newGrandParent)
    } 
    dfs(root, null, null)

    return sum
};



// (6, null ,null)
// newGrandparent = null
// (7, 6, null)  (8, 6 null)
// newGrandparent = 6
// (2, 7, 6)  (7, 7, 6)
