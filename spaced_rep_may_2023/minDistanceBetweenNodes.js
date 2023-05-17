var minDiffInBST = function(root) {
    let min = Infinity, stack = [[root, -Infinity, Infinity]]

    while (stack.length) {
        let [node, maxV, minV] = stack.pop()
        if (node.left) {
            min = Math.min(Math.abs(node.val - node.left.val))
            stack.push([node.left, node.val, minV])
        }
        if (node.right) {
            min = Math.min(Math.abs(node.val - node.right.val))
            stack.push([node.right, maxV, node.val])
        }
        min = Math.min(Math.abs(node.val - maxV), min);
        min = Math.min(Math.abs(node.val - minV), min)
    }
    return min
};
console.log(minDiffInBST())