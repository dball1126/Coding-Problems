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
// DP On Trees
// Top-Down Dynamic Programming
// Tima nd Space: O(n)
var rob = function(root) { 
    const dfs = (nde) => {
        if (!nde.left && !nde.right) return [0, 0]

        let [Lp1, Lp2] = dfs(nde.left)
        let [Rp1, Rp2] = dfs(nde.right)

        let v1 = Lp2 + Rp2 + nde.val, v2 = Lp1 + Rp1
        let newP2 = Math.max(v2, Lp2 + Rp2, Rp2 + Lp1, Lp2 + Rp1), newP1 = v1;

        return [newP1, newP2]
    }
    const [prev1, prev2] = dfs(root)
    return Math.max(prev1, prev2)
};
