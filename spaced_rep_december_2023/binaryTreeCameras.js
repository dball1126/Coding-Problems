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
// Time and Space: O(h)...for height of tree...recursive call stacks
var minCameraCover = function(root) {
    const dfs = (nde, parent) => {
        if (!nde) return [0,0,0]
        if (!nde.left && !nde.right && parent) return [0,1,0]
        if (!nde.left && !nde.right) return [1,0,0]
        let [l1, l2, l3] = dfs(nde.left, nde), [r1,r2,r3] = dfs(nde.right, nde)

        if (l2 === 1 || r2 === 1) {
            return [l1+r1+1, 0, 1]
        } else if (l3 === 1 || r3 === 1) {
            return [l1+r1, 0, 0]
        } else if (parent) {
            return [l1+r1, 1, 0]
        } else {
            return [l1+r1+1, 0 , 1]
        }
    }
    let [coins, needsCamera, isCamera]  = dfs(root, null)
    return coins
};