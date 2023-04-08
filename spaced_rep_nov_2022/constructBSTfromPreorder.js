
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}



// Iterative Preorder Traversal: Root, left, right
// Time and Space: O(n)
var bstFromPreorder = function(preorder) {
    if (!preorder.length) return null
    let stack = [], root = null, peek = null
    for (let val of preorder) {
        let node = new TreeNode(val)
        peek = stack[stack.length-1]
        if (!root) {
            root = node
        } else if (peek.val > node.val) {
            peek.left = node
        } else {
            while (stack.length && node.val > stack[stack.length-1].val) {
                peek = stack.pop();
            }
            peek.right = node
        }
        stack.push(node)
    }
    return root
};
