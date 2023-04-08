var minDepth = function(root) {
    if (!root) return 0;
    let result = 0;
    let left = minDepth(root.left);
    let right = minDepth(root.right);

    if (left === 0) {
        result = right + 1
    } else if (right === 0) {
        result = left + 1
    } else {
        result = Math.min(left, right) + 1
    }

    return result;
};


function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
  
  const node = new TreeNode(3)
//   node.left = new TreeNode(9)
  node.right = new TreeNode(20)
//   node.left.left = new TreeNode(-20)
  node.right.right = new TreeNode(7)
  node.right.left = new TreeNode(15)

console.log(minDepth(node))
