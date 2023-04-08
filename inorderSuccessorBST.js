var inorderSuccessor = function(node) {
    let value = null;
    if (node.right) {
        node = node.right;
        while(node.left) node = node.left
        value = node;
    }
    return value;
};



  function Node(val) {
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
    
};

let root = new TreeNode(6)
root.left = new TreeNode(2)
root.right = new TreeNode(8)
root.right.left = new TreeNode(7)
root.right.right = new TreeNode(10)
root.left.right = new TreeNode(4)
root.left.left = new TreeNode(0)

console.log(inorderSuccessor(root))


