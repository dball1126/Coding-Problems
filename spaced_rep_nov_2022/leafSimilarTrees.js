// Time & Space: O(n + m)
var leafSimilar = function(root1, root2) {
    let tree1 = [], tree2 = []

    const dfs = (n, nodes) => {
        if (!n) return;
        if (!n.left && !n.right) {
            return nodes.push(n.val)
        }
        dfs(n.left, nodes)
        dfs(n.right, nodes)
    }
    dfs(root1, tree1)
    dfs(root2, tree2)
    if (tree1.length !== tree2.length) return false;
    for (let i = 0; i < tree1.length; i++) {
        if (tree1[i] !== tree2[i]) return false;
    }
    return true;
};
