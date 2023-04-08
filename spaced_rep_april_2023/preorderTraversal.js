// Root, Left, Right
// DFS, Stack
// Time and Space: O(n)
var preorderTraversal = function(root) {
    let curr = root, stack = [], preorder = []

    while (curr || stack.length) {
        if (!curr) curr = stack.pop();
        preorder.push(curr.val)
        if (curr.right) stack.push(curr.right)
        curr = curr.left;
    }
    return preorder
};