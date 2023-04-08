var isValidBST = function(root) {
    if (!root) return false;
    const rootVAL = root.val;

    const helper = (node, low, high) => {
        if (!node) return true;
        if (node.left && node.left.val >= node.val) return false;
        if (node.right && node.right.val <= node.val) return false;
        
        if (high && node.val > high) return false;
        if (low && node.val < low) return false;


        return helper(node.left, low, node.val) && helper(node.right, node.val, high)
    }

    return helper(root, undefined, undefined)
};

// [5,4,6,null,null,3,7]
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
// root.right = new TreeNode(3)

// let root = new TreeNode(2)
// root.left = new TreeNode(1)
// root.right = new TreeNode(3)

console.log(isValidBST(root))