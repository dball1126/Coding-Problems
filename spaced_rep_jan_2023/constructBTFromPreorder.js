function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
// Time and Space: O(n)
var bstFromPreorder = function(preorder) {
    let root = null, stack = [];
    for(let val of preorder) {
        let node = new TreeNode(val);
        if (!root) {
            root = node;
            stack.push(node)
        } else {
            let prev = stack[stack.length-1]
            if (prev && prev.val > val) {
                prev.left = node
                stack.push(node)
            } else {
                while (stack.length && stack[stack.length-1].val < val) {
                    prev = stack.pop();
                }
                if (prev) prev.right = node;
                stack.push(node)
            }
        }
    }
    return root;
};
