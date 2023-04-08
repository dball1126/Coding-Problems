 function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    if (!root) return [];

    const find = (node) => {
        if (!node) return null;
        if (node.val === val) return node;

        if (val > node.val) {
           return find(node.right)
        } else {
           return find(node.left)
        }
    }

    return find(root);
};
const node = new TreeNode(4)
node.left = new TreeNode(2)
node.right = new TreeNode(7)
node.left.left = new TreeNode(1)
node.left.right = new TreeNode(3)




console.log(searchBST(node, 10))