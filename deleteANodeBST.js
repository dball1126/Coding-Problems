var deleteNode = function(root, key) {
    if (!root) return root;
    if (key > root.val) {
        root.right = deleteNode(root.right, key)
    } else if (key < root.val) {
        root.left = deleteNode(root.left, key)
    } else {
        if (!root.left && !root.right) {
            root = null;
        } else if (root.left) {
            root.val = getPredecessor(root.left)
            root.left = deleteNode(root.left, root.val)
        } else if (root.right) {
            root.val = getSuccessor(root.right)
            root.right = deleteNode(root.right, root.val)
        }
    }
    return root;
};

const getPredecessor = (node) => {
    while (node.right) node = node.right;
    return node.val;
}

const getSuccessor = (node) => {
    while (node.left) node = node.left
    return node.val
}

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

let root = new TreeNode(5)
root.left = new TreeNode(3)
root.right = new TreeNode(6)
root.right.right = new TreeNode(7)
root.left.right = new TreeNode(4)
root.left.left = new TreeNode(2)


console.log(deleteNode(root, 0))