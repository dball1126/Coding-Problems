// Preorder: root, left, right
// Time and Space: O(n)
var flatten = function(root) {
    let curr = root, stack = [], order = [], prev = null;

    while (curr || stack.length) {
        if (curr && curr.left) {
            while (curr && curr.left) {
                order.push(curr)
                stack.push(curr)
                curr = curr.left;
            }
            order.push(curr)
        } else if (curr) {
            order.push(curr)
        }
        if (!curr) curr = stack.pop();
        curr = curr.right;
    }
    while (order.length) {
        let next = order.shift();
        next.left = null;
        if (prev) prev.right = next;
        prev = next;
    }
    return prev;
};
