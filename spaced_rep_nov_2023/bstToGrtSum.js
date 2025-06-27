/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// Inorder Traversal
// Time and Space: O(n)
var bstToGst = function(root) {
    let curr = root, stack = [], inorder = []
    while (curr || stack.length) {
        while (curr && curr.left) {
            stack.push(curr)
            curr = curr.left
        }
        if (!curr) curr = stack.pop();
        inorder.push(curr)
        curr = curr.right
    }
    const n = inorder.length

    for (let i = n-1; i >= 0; i--) {
        const val = i + 1 < n ? inorder[i+1].val : 0
        inorder[i].val += val        
    }
    return root;
};