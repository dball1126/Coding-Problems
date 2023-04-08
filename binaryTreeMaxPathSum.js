var maxPathSum = function(root) {
    let max = -Infinity;
    // console.log(max)
    const helper = (node) => {
        if (!node) return 0;

        let left = helper(node.left)
        let right = helper(node.right)
        // console.log(left + right + node.val)
        // console.log(left + node.val)
        // console.log(right + node.val)
        // console.log(right)
        // console.log(left)
        // console.log(max)
        // console.log(node.val)
        if (left <= 0 || right <= 0) {
            max = Math.max(left + right + node.val, left + node.val, right + node.val, node.val);
        } else {
            max = Math.max(left + right + node.val, left + node.val, right + node.val, right, left, max, node.val);
        }
        // console.log(left)
        // console.log(right)
        // console.log(max)
        if (left <= 0 || right <= 0) {
            return Math.max(node.val, max)
        } else {
            return Math.max(left , right) + node.val;
        }
    }
    
    helper(root);
    return max
};

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

let root = new TreeNode(-10);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

console.log(maxPathSum(root))