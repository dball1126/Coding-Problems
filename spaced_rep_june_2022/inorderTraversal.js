// const inorderTraversal = (n) => {
//     if (!n) return []
//     return [...inorderTraversal(n.left), n.val, ...inorderTraversal(n.right)]
// }

const inorderTraversal = (n) => {
    if (!n) return [];
    let curr = n, stack = [], result = []
    while (curr || stack.length) {
        while (curr) {
            stack.push(curr)
            curr = curr.left
        }
        if (!curr) curr = stack.pop();
        result.push(curr.val)
        curr = curr.right
    }
    return result;
}