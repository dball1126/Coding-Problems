/**
 * DFS Time and space O(n)
 */
var getTargetCopy = function(original, cloned, target) {
    let found;
    const dfs = (n) => {
        if (!n) return
        if(n.val === target.val) {
            return found = n
        }
        dfs(n.left)
        dfs(n.right)
    }
    dfs(cloned)
    return found
};