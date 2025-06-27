// Depth First Search
// Time and Space: O(n)
// Recursive
var preorderTraversal = function(root) {
    if (!root) return []
    return [root.val, ...preorderTraversal(root.left), ...preorderTraversal(root.right)]
};
// Iterative
var preorderTraversal = function(root) {
    let stack = [], result = []

    while (root || stack.length) {
        if (!root) root = stack.pop();
        result.push(root.val);
        if (root.right) stack.push(root.right)
        root = root.left
    }
    return result;
};

