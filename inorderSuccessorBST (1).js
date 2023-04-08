  function TreeNode(val) {
     this.val = val;
     this.left = null;
     this.right = null;
     this.parent = null;
  };

/**
 * @param {Node} node
 * @return {Node}
 */
 var inorderSuccessor = function(node) {
    if (!node) return node;
    const value = node.val;

    if (node.right) {
        node = node.right
        while (node.left) node = node.left
        return node;
    }

    while (node.parent) {
        node = node.parent;
        if (node.val > value) return node;
    }

    return null;
};

const root = new TreeNode(6)
root.left = new TreeNode(2)
root.left.parent = root;

root.right = new TreeNode(8)
root.right.parent = root;

root.left.left = new TreeNode(0)
root.left.left.parent = root.left

root.left.right = new TreeNode(4)
root.left.right.parent = root.left

root.right.left = new TreeNode(7)
root.right.left.parent = root.right

root.right.right = new TreeNode(9)
root.right.right.parent = root.right

root.left.right.left = new TreeNode(3)
root.left.right.left.parent = root.left.right

root.left.right.right = new TreeNode(5)
root.left.right.right.parent = root.left.right

console.log(inorderSuccessor(root.right.right))