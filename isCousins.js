/**
 * Keep track of the parent node for the left and right side.
 * Use recursion.
 * Keep track of the depth of the depth. Will need two variables.
 * Use helper function.
 */


var isCousins = function(root, x, y) {
    
};

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
// [5,4,6,null,null,3,7]
let root = new TreeNode(5)
root.left = new TreeNode(4)
root.right = new TreeNode(6)
root.right.left = new TreeNode(3)
root.right.right = new TreeNode(7)