
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * DFS
 * Time & Space: O(n)
 */
var bstFromPreorder = function(preorder) {
    let root = new TreeNode(preorder[0])
    let stack = [root]
    for (let i = 1; i < preorder.length; i++) {
        let peek = stack[stack.length-1]
        let curr = new TreeNode(preorder[i])

        if (curr.val < peek.val) {
            peek.left = curr
            stack.push(curr)
        } else {

            while (stack.length && curr.val > stack[stack.length-1].val) {
                peek = stack.pop();
            }
            
            peek.right = curr
            stack.push(curr)
        }
    }
    return root;
};