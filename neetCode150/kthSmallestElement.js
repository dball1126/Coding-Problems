// Iterative Depth-First-Search
// Inorder Traversal: Left, Root, Right
//  Time and Space: O(n)
var kthSmallest = function(root, k) {
    let inorder = [], curr = root, stack = []

    while (curr || stack.length) {
        if (curr && curr.left) {
            stack.push(curr);
            curr = curr.left
            continue;
        }
        if (!curr) curr = stack.pop();
        inorder.push(curr.val)
        if (inorder[k-1] !== undefined) return inorder[k-1]
        curr = curr.right
    }
    return inorder[k-1]
};
