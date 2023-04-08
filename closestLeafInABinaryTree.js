/**
 * Use recursion.
 * Keep track of the nodes on the left of the root and the right of the root
 * 
 * 
 * @param {*} root 
 * @param {*} k 
 */


var findClosestLeaf = function(root, k) {
    
    
    const leafDistance = (node, steps, side) => {
        steps += 1;
    }



};


let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
//  root.right = new TreeNode(99);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.left.right.right = new TreeNode(7)
root.left.right.left = new TreeNode(8)

console.log(findClosestLeaf(root, 2))


 /**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

