function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * Use recursion.
 * Use the max between the left and the right nodes. 
 * Return the max of each side added together
 * Use a helper function.
 */


var diameterOfBinaryTree = function(root) {
   let maxDiameter = 0;

   const findDiameter = (node) => {
       if (!node) return 0;

       let left = findDiameter(node.left);
       let right = findDiameter(node.right)

       maxDiameter = Math.max(maxDiameter, left+right);

       return Math.max(left, right) + 1;
   }

   findDiameter(root)
   return maxDiameter
};
// [4,-7,-3,null,null,-9,-3,9,-7,-4,null,6,null,-6,-6,null,null,0,6,5,null,9,null,null,-1,-4,null,null,null,-2]
let node = new TreeNode(4)
node.left = new TreeNode(-7)
node.right = new TreeNode(-3)
node.right.left = new TreeNode(-9)
node.right.right = new TreeNode(-3)
// node.left.right = new TreeNode(3)


console.log(diameterOfBinaryTree(node))