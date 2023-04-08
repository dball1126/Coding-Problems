/**
 * Root, left, right
 * DFS
 * Time and space: O(n)
 */
var preorderTraversal = function(n) {
    if (!n) return []
    let curr = n, stack = [], result = []
    while (curr || stack.length) {
        if (!curr) curr = stack.pop()

        if (curr.right) stack.push(curr.right)
        if (curr.left) stack.push(curr.left)
        result.push(curr.val)
        curr = null;
    }
    return result
}

