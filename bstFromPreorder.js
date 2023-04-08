function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}


var bstFromPreorder = function(preorder) {
    if (!preorder.length) return null;
    let nodeM = new TreeNode(preorder.shift())
    let root = Object.assign(nodeM);
    let stack = [nodeM]

    for (let i = 0; i < preorder.length; i++) {
        let node = new TreeNode(preorder.shift())

        if (stack[stack.length-1].val > node.val) {
            stack[stack.length-1].left = node
            stack.push(node)
        } else {
            console.log("peek: " + stack[stack.length-1].val)
            console.log(" node: " + node.val)
            let lastNode = stack[stack.length-1];
            while (stack[stack.length-1].val < node.val) {
                lastNode = stack.pop();
            }
            lastNode.right = node;
            stack.push(node)
        }
    }
    return root
};

let nums = []

console.log(bstFromPreorder([8,5,1,7,10,12]))