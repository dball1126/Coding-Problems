
// Depth First Search
// Time and Space: O(n)
// Left, Right, Root

//Recursive
var postorderTraversal = function(root) {
    if (!root) return []
    return [...postorderTraversal(root.left), ...postorderTraversal(root.right), root.val]
};
// Iterative
var postorderTraversal = function(root) {
    let stack = [], result = []

    while (stack.length || root) {
        let prev = result[result.length-1]

        while (root && root.left && root.left.val !== prev) {
            stack.push(root)
            root = root.left
        }
        if (!root) root = stack.pop();
        prev = result[result.length-1]

        if (root.right && root.right.val !== prev) {
            stack.push(root)
            root = root.right
        } else {
            result.push(root.val)
            root = null;
        }
    }
    return result
};

