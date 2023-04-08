var maxDepth = function(root, low, high) {
    if (!root) return 0;
    let val = 0; 
    if (root.val >= low && root.val <= high) val = root.val
    return val + maxDepth(root.left, low, high) + maxDepth(root.right, low, high)
};

 function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
 }

 let node = new TreeNode(10)
 node.left = new TreeNode(5)
 node.left.left = new TreeNode(3)
 node.left.right = new TreeNode(7)
 node.right = new TreeNode(15)
 node.right.right = new TreeNode(18)

 console.log(maxDepth(node, 7, 15))