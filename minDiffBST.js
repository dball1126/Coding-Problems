// Iterative Inorder traversal
// Time and Space: O(n)
var getMinimumDifference = function(root) {
    let stack = [], curr = root, vals = [], min = Infinity

    while (stack.length || curr) {
        while (curr && curr.left) {
            stack.push(curr)
            curr = curr.left
        }
        if (!curr) curr = stack.pop()
        if (vals.length) {
            min = Math.min(min, Math.abs(vals[vals.length-1] - curr.val))
        }
        vals.push(curr.val)
        curr = curr.right;
    }
    return min
};

