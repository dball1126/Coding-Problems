// Postorder: Left, Right, Root
// DFS, Stack
// Time and Space: O(n)
var postorderTraversal = function(root) {
    let curr = root, stack = [], postorder = []

    while (curr || stack.length) {
        if (!curr) curr = stack.pop();
        let last = postorder[postorder.length-1]
        if (last !== undefined && (curr.right && curr.right.val === last || curr.left && curr.  left.val === last)) {
            postorder.push(curr.val)
            curr = null;
            continue;
        }

        if (curr.right) {
            stack.push(curr)
            stack.push(curr.right)
        } else if (!curr.left && !curr.right) {
            postorder.push(curr.val)
            curr = null;
            continue;
        } else if (curr.left) {
            stack.push(curr)
        }
        curr = curr.left;
    }
    return postorder
};
