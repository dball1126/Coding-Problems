// left, root, right
// Time and Space: O(n)
// recursive
var postorderTraversal = function(root) {
    if (!root) return [];
    return [...postorderTraversal(root.left), ...postorderTraversal(root.right), root.val]
};
// iterative
var postorderTraversal = function(root) {
    let postOrder = [], stack = [], curr = root
    while (curr || stack.length) {
        while (curr && curr.left) {
            let peek = stack[stack.length-1]
            if (peek && (peek.val === curr.left.val)) break;
            stack.push(curr)
            curr = curr.left
        }
        if (!curr) curr = stack.pop();
        let peek = postOrder[postOrder.length-1]
        if (!curr.right) {
            postOrder.push(curr.val)
            curr = null
        } else {
            if ((peek === undefined) || (peek !== undefined && (peek !== curr.right.val))) {
                stack.push(curr)
                curr = curr.right
            } else {
                postOrder.push(curr.val)
                curr = null;
            }
        }
    }
    return postOrder
}