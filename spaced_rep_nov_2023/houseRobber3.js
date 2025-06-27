/**
 * @param {TreeNode} root
 * @return {number}
 */

// Recursive Depth-First-Search
// Dynamic Programming
// Time and Space: O(n) (space can be O(h) for height of tree)
var rob = function(root) {
    const dfs = (nde) => {
        if (!nde) return [0, 0]
        if (!nde.left && !nde.right) {
            return [nde.val, 0]
        }

        const [p1, pp1] = dfs(nde.left)
        const [p2, pp2] = dfs(nde.right)

        const prev = pp1 + pp2 + nde.val
        const prevprev = Math.max(p1+p2, p1+pp2, p2 + pp1, pp1+pp2)
        return [prev, prevprev]
    }

    const [prev, prevprev] = dfs(root)

    return Math.max(prev, prevprev)
};
