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
// Time and Space: O(n)
var rob = function(root) {
    
    const dfs = (nde) => {
        if (!nde) return [0,0]

        let [Lval, Lprev] = dfs(nde.left)
        let [Rval, Rprev] = dfs(nde.right)

        let newCurr = Math.max(nde.val + Lprev + Rprev, Lval + Rval);
        let newPrev = Math.max(Lprev + Rprev, Lval + Rval);

        return [newCurr, newPrev]
    }

    let [curr, prev] = dfs(root)
    return Math.max(curr, prev)
};



