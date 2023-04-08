// DFS, Root, Left, Right
// Time and Space: O(n)
// Recursive
const preorderTraversalR = (root) => {
    if (!root) return []
    return [root.val, ...preorderTraversalR(root.left), ...preorderTraversalR(root.right)]
}
// Iterative
const preorderTraversal = (root) => {
    let stack = [], preorder = [], curr = root;

    while (curr || stack.length) {
        if (!curr) curr = stack.pop();
        preorder.push(curr.val)
        if (curr.right) stack.push(curr.right)
        curr = curr.left;
    }
    return preorder;
}