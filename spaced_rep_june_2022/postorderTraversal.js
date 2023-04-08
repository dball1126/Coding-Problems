// const postorderTraversal = (n) => {
//     if (!n) return []
//     return [...postorderTraversal(n.left), ...postorderTraversal(n.right), n.val]
// }

const postorderTraversal = (n) => {
    if (!n) return [];
    let curr = n, stack = [], result = [], prev = null
    while (curr || stack.length) {
        while (curr) {
            if (curr.left && prev && curr.left.val === prev.val) {
                break;
            }
            stack.push(curr)
            curr = curr.left
        }
        if (!curr) curr = stack.pop();
        if (curr.right && !prev || curr.right && prev && prev.val !== curr.right.val ) {
            stack.push(curr)
            curr = curr.right
        } else {
            result.push(curr.val)
            prev = curr
            curr = null
        }
    }
    return result;
}