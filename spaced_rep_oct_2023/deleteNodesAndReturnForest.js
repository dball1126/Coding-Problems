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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */


// Recursive Depth-First-Search
// Time and Space: O(n)
var delNodes = function(root, to_delete) {
    let deletes = new Set(), rootNodes = []
    to_delete.forEach(n => deletes.add(n))

    const dfs = (nde, parent) => {
        if(!nde) return;
        let left = nde.left, right = nde.right
        if (left && deletes.has(left.val)) nde.left = null;
        if (right && deletes.has(right.val)) nde.right = null;
        if (deletes.has(nde.val)) {
            nde = null;
            dfs(left, true)
            dfs(right, true)
            return;
        }
        if (parent) {
            rootNodes.push(nde)
        }
        dfs(left, false)
        dfs(right, false)
    }
    dfs(root, true)
    return rootNodes
};
