/**
 * DFS
 * Time: O(n * h)
 * Space: O(h)
 */
var pathSum = function(node, t) {
    if (!node) return [];
    const dfs = (n, paths) => {
        if (!n.left && !n.right) return [n.val]
        let left = n.left ? dfs(n.left, paths) : []
        let right = n.right ? dfs(n.right, paths) : []
        if (left.length){ 
            left.forEach(v => {
                if (typeof(v) !== 'number') {
                    paths.push([n.val, ...v])
                } else {
                    // paths.push([n.val, v])
                }
            })
        }
        if (right.length){ 
            right.forEach(v => {
                if (typeof(v) !== 'number') {
                    paths.push([n.val, ...v])
                } else {
                    paths.push([n.val, v])
                }
            })
        }
        return paths
    }
    let allPaths = dfs(node, [])
    return allPaths.filter(v => v.reduce((acc, v) => acc + v) === t)
};
