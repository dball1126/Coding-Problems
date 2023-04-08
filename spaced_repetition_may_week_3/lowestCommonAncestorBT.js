/**
 * DFS, recursion, use two variables
 * Time and Space: O(n)
 */
var lowestCommonAncestor = function(root, p, q) {
    let parent = undefined, child = undefined
    const dfs = (n, v1, v2) => {
        if (!n) return;
        let mainV = false
        if (n.val === p.val || n.val === q.val) mainV = true

        if (mainV && v1 || mainV && v2 || v1 && v2) {
            parent = n;
            return true
        }

        let left = dfs(n.left, mainV || v1, v2)
        let right = dfs(n.right, v1, mainV || v2)
        if (mainV && left || left && right || mainV && right) {
            parent = n;
        }
        return left || right || mainV
   
    }
    dfs(root, false, false)
    return parent
}