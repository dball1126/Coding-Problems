
 function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
 }
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    if (!root) return [];

    let arr = []
    if (root && arr.length === 0) {
        arr.push(root.val)
    }

    if (root.right) {
        arr = arr.concat(rightSideView(root.right))
        return arr
    } else {
        return arr
    }
};
// root = [1,2,3,null,5,null,4]
let node = new TreeNode(1)
// node.left = new TreeNode(2)
node.left = new TreeNode(2)
// node.left.right = new TreeNode(5)
// node.right.right = new TreeNode(4)

console.log(rightSideView(node))