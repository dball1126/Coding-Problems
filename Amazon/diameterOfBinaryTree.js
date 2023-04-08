function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
/**
 * Definition for a binary tree node.
 */
/**
 * get the height of each leaf and return the max difference between each.
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    if (!root || !root.left && !root.right) return 0;

    const getHeight = (node) => {
        if (!node) return 0;
        return 1 + Math.max(getHeight(node.left), getHeight(node.right))
    }
    return getHeight(root.left) + getHeight(root.right)
}
const node = new TreeNode(5)
const node2 = new TreeNode(1)
const node3 = new TreeNode(10)
node.left = node2;
node.right = node3;

console.log(diameterOfBinaryTree(node))



