// Iterative Breadth-First-Search;
// Time and Space: O(n)...one level is worst case: n/2 = O(n)
var invertTree = function(root) {
    if (!root) return root;
    const bfs = [root]
    while (bfs.length) {
        const node = bfs.shift();
        let left = node.left, right = node.right;
        node.right = left;
        node.left = right;
        if (left) bfs.push(left)
        if (right) bfs.push(right)
    }
    return root;
};

// Recursive Depth-First-Search
// Time and Space: O(n)...one level is worst case: n/2 = O(n)
var invertTree = function(root) {
    if (!root) return root;
    let left = root.left, right = root.right
    root.left = invertTree(right)
    root.right = invertTree(left)
    return root 
}
