
var maxPathSum = function(root) {
    let max = -Infinity;

    const helper = (node) => {
        if (!node) return 0;

        let left = Math.max(0, helper(node.left)) 
        let right = Math.max(helper(node.right), 0)
        let sum = left + right + node.val;
        max = Math.max(max, sum, node.val)

        return Math.max(left, right) + node.val
    }

    let someMax = helper(root)
    max = Math.max(max, someMax)
    return max
};


 function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

  let root = new TreeNode(-10);
  root.left = new TreeNode(7);
  root.right = new TreeNode(3);
  root.right.left = new TreeNode(15);
  root.right.right = new TreeNode(7);
//   root.left.left = new TreeNode(4);
//   root.left.right = new TreeNode(5);
//   root.left.right.right = new TreeNode(7)
//   root.left.right.left = new TreeNode(8)

console.log(maxPathSum(root))