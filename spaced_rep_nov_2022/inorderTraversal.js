// left, root, right
// Time and Space: O(n)
// recursive
var inorderTraversal = function(root) {
    if (!root) return []
    return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)]
};
// iterative
var inorderTraversal = function(root) {
    if (!root) return []
    let inorder = [], stack = [], curr = root

    while (curr || stack.length) {
        while (curr && curr.left) {
            let peek = stack[stack.length-1]
            if (peek && (peek.val === curr.left.val)) break;
            stack.push(curr)
            curr = curr.left
        }
        if (!curr) curr = stack.pop();
        inorder.push(curr.val)
        curr = curr.right
    }
    return inorder
}
