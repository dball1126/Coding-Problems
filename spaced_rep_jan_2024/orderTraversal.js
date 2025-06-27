// Depth First Search
// Recursive
// Time and Space: (n)
var inorderTraversal = function(root) {
    if (!root) return []
    return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)]    
};

// Iterative
var inorderTraversal = function(root) {
    let result = [], stack = [];
    while (stack.length || root) {
        while (root && root.left) {
            stack.push(root);
            root = root.left;
        }
        if (!root) root = stack.pop();
        result.push(root.val);
        root = root.right;
    }
    return result;
};

