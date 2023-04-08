// DFS. Left, Right, Root
// Time and Space: O(n)
var postorderTraversal = function(root) {
    if (!root) return []
    let postOrder = [], curr = root, stack = [];
    while (curr || stack.length) {
        if (!curr) curr = stack.pop();
        let prev = postOrder[postOrder.length-1]
        let currLeft = Infinity, currRight = Infinity
        if (curr.left) currLeft = curr.left.val;
        if (curr.right) currRight = curr.right.val;
        if (prev === undefined || (currLeft !== prev && currRight !== prev)) {
            while (curr.left) {
                stack.push(curr)
                curr = curr.left;
            }
        }
        if ((prev === undefined && curr.right) || 
            prev !== undefined && curr.right && prev !== curr.right.val) {
            stack.push(curr)
            curr = curr.right;
        } else {
            postOrder.push(curr.val)
            curr = null;
        }
    }
    return postOrder
};

