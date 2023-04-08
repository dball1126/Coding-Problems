const inorderTraversalBST = (node) => {
    const arr = [];

    const build = (node) => {
        if (!node) return;
        if (!node.left && !node.right) {
            return arr.push(node.val)
        }

        build(node.left)
        arr.push(node.val)
        build(node.right)
    }
    build(node)
    return arr;
}

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

let root = new TreeNode(6)
root.left = new TreeNode(2)
root.right = new TreeNode(8)
root.left.right = new TreeNode(4)
root.left.left = new TreeNode(0)

console.log(inorderTraversalBST(root))
