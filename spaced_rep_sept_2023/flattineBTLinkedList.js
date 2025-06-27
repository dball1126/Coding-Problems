// DFS, STACK
// Time: O(n)
// Space: log(n)
var flatten = function(root) {
    let copyR = null, curr = root, stack = []

    while (curr || stack.length) {
        if (!curr) curr = stack.pop();
        if (copyR) {
            copyR.right = curr
            copyR.left = null
            copyR = curr
        } else {
            copyR = curr
        }
        if (curr.right) stack.push(curr.right)
        if (curr.left) {
            curr = curr.left
        } else {
            curr = null
        }
    }
    return root
};