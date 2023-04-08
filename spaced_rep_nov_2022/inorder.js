// DFS, Time & Space: O(n)
const inorder = (root) => {
    if (!root) return [];
    let stack = [], curr = root, inorder = []

    while (curr || stack.length) {
        while (curr || stack.length) {
            while (curr && curr.left) {
                stack.push(curr)
                curr = curr.left
            }
            if (!curr) curr = stack.pop();
            inorder.push(curr.val)
            curr = curr.right
        }
    }
    return inorder
}
