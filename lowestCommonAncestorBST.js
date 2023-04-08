

var lowestCommonAncestor = function(root, p, q) {
 
};



const node = new TreeNode(6)
node.left = new TreeNode(2)
node.right = new TreeNode(8)
node.left.left = new TreeNode(0)
node.left.right = new TreeNode(4)
node.left.right.left = new TreeNode(3)
node.left.right.right = new TreeNode(5)

node.right.right = new TreeNode(9)
node.right.left = new TreeNode(7)

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}


console.log(lowestCommonAncestor(node, node.right.left, node.right.right))