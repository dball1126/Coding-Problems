function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var serialize = function(root) {
    let preorder = "[", curr = root, stack = []
    if (!root) return ""
    while (curr || stack.length) {
        if (!curr) curr = stack.pop()
        if (curr.right) stack.push(curr.right)
        preorder += (curr.val)
        curr = curr.left
        if (stack.length || curr) preorder += ","
    }
    return preorder += "]"
};
var deserialize = function(data) {
    if (!data || data === "null") return null
    let preorder = JSON.parse(data), stack = [], root = null, peek = null
    for (let val of preorder) {
        let node = new TreeNode(val), peek = stack[stack.length-1]
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