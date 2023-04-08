/** DFS, root, left, right
 * Time and Space: O(n)
 */ // recursive
var preorderTraversal = function(root) {
    if (!root) return [];
    return [root.val, ...preorderTraversal(root.left), ...preorderTraversal(root.right)]
};
// iterative
var preorderTraversal = function(root) {
    if (!root) return [];
    let order = [], stack = [], curr = root

    while (curr || stack.length) {
        if (!curr) curr = stack.pop();
        order.push(curr.val);
        if (curr.right) stack.push(curr.right)
        curr = curr.left
    }
    return order;
}
