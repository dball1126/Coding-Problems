// Depth-First-Search
// Left, Root, Right;
// Time and Space: O(n)
const inorderTraversal = (root) => {
    if (!root) return []
    let order = [], curr = root, stack = []
    
    while (curr || stack.length) {
        while (curr && curr.left) {
            stack.push(curr)
            curr = curr.left
        }
        if (!curr) curr = stack.pop();
        order.push(curr.val)
        curr = curr.right
    }
    return order
}    
