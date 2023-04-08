/**
 * Break it down into smaller segments(isValid and then sum)
 * Use Recursion.
 * Verify at every node that it is a valid BST.
 * Left child is smaller than root, right child is bigger than the root.
 * Use two variables to confirm the tree is valid and the sum.
 * @param {*} root 
 */


var maxSumBST = function(root) {
    let mainSum = 0;
    const helper = (node, minMax, bigMax, sum) => {
        if (!node) return 0;
        sum += node.val;
        let left;
        let right;
        
        if (node.val > minMax && node.val < bigMax) {
            mainSum = Math.max(mainSum, sum);

            left = helper(node.left, node.val, node.val, sum)
            right = helper(node.right, node.val, node.val, sum)
            mainSum = Math.max(mainSum, sum);
        }
    }
    helper(root,-Infinity, Infinity, 0)
    return mainSum
};

const checkChildren = (node) => {
    if (node.left && node.left.val > node.val) return false;
    if (node.right && node.right.val < node.val) return false;
    return true;
}

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

let root = new TreeNode(5);
root.left = new TreeNode(4);
root.right = new TreeNode(6);
root.right.left = new TreeNode(3);
root.right.right = new TreeNode(7);
// root.right.right.left = new TreeNode(17)
// root.left.right = new TreeNode(4)
// root.left.left = new TreeNode(0)
// root.left.right.left = new TreeNode(3)
// root.left.right.right = new TreeNode(5)
// root.left.right.left = new TreeNode(3)




console.log(maxSumBST(root))