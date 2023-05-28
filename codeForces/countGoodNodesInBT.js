// Iterative Depth-First-Search
// Time and Space: O(n)
var goodNodes = function(root) {
    if (!root) return 0;
    let count = 0, stack = [[root, -Infinity]];
    while (stack.length) {
        let [node, max] = stack.pop();
        if (node.val >= max) count++;
        let val = Math.max(max, node.val);
        if (node.left) stack.push([node.left, val]);
        if (node.right) stack.push([node.right, val]);
    }
    return count;
};
// Recursive Depth-First-Search
// Time and Space: O(n)
var goodNodes = function(root) {
    let count = 0;
    const dfs = (node, max) => {
        if (!node) return;

        if (node.val >= max) count++;
        let val = Math.max(max, node.val);
        dfs(node.left, val);
        dfs(node.right, val);
    }
    dfs(root, -Infinity)
    return count;
};

