let peek = stack[stack.length-1]
/**
 * Left, Root, Right
 * DFS
 * Time & Space: O(n)
 */
 var inorderTraversal = (n) => {
    let curr = n, result = [], stack = []

    while (curr || stack.length) {
        while (curr && curr.left) {
            let peek = stack[stack.length-1]
            if (peek && (curr.left.val === peek.val)) continue
            stack.push(curr)
            curr = curr.left
        }

        if (!curr) curr = stack.pop()

        result.push(curr.val)
        curr = curr.right
    }

    return result
}
