const bstToGst = (root) => {
    let sum = 0;
    const helper = (node) => {
        if (!node) return 0;

        helper(node.right)
        const valCopy = node.val;
        node.val += sum
        sum += valCopy
        helper(node.left)
        return;
    }
    helper(root)
    return root
}

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

let root = new TreeNode(4);
root.left = new TreeNode(1);
root.right = new TreeNode(6);
 root.right.right = new TreeNode(7);
 root.right.right.right = new TreeNode(8);
 root.right.left = new TreeNode(5)
root.left.left = new TreeNode(0);
root.left.right = new TreeNode(2);
root.left.right.right = new TreeNode(3)
// root.left.right.left = new TreeNode(8)

console.log(bstToGst(root))