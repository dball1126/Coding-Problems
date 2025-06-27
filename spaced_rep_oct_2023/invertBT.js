// Iterative BFS
// Time and Space: O(n)
var invertTree = function(root) {
    const bfs = [root]
    while (bfs.length) {
        let nde = bfs.shift();
        if (!nde) continue;
        let left = nde.left, right = nde.right
        nde.right = left; nde.left = right;
        if (left) bfs.push(left)
        if (right) bfs.push(right)
    }
    return root
};
