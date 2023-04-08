 function TreeNode(val, left, right) {
this.val = (val===undefined ? 0 : val)
this.left = (left===undefined ? null : left)
this.right = (right===undefined ? null : right)
 }

/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {

    const helper = (node, max) => {
        if (!node) return 0;
        let left = helper(node.left, max);
        let right = helper(node.right, max);
        return Math.max(max, left, right) + 1;
    }

    let main = helper(root, 0)
    let left = helper(root.left, 0)
    let right = helper(root.right, 0)
    return Math.max(main -1, left + right)
};

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.right = new TreeNode(99);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(diameterOfBinaryTree(root))