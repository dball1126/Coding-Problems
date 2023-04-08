var maxDepth = function(root) {
    if (!root) return 0;

    return Math.max(1 + maxDepth(root.left), 1 + maxDepth(root.right))
};

 function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
 }

 let node = new TreeNode(3)
 node.left = new TreeNode(9)
 node.right = new TreeNode(20)
 node.right.left = new TreeNode(15)
 node.right.right = new TreeNode(7)

 console.log(maxDepth(node))