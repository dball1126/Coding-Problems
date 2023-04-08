var inorderSuccessor = function(root, p) {

    let foundNode = null;
    let successor = null;
    const helper = (node) => {
        if (!node) return;
        if (node.val > p.val) {
            successor = node;
            return helper(node.left)
        }
        if (node.val === p.val) {
            foundNode = node
        }
        return helper(node.right)
    }
    helper(root)
    if (foundNode && foundNode.right && foundNode.right.val < successor.val) {
        return foundNode.right
    } else {
        return successor
    }
};


function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

let root = new TreeNode(6)
root.left = new TreeNode(2)
root.right = new TreeNode(8)
root.left.right = new TreeNode(4)
root.left.left = new TreeNode(0)
root.left.right.left = new TreeNode(3)
root.left.right.right = new TreeNode(5)
root.left.right.left = new TreeNode(3)

root.right.left = new TreeNode(7)
root.right.right = new TreeNode(9)
let p = new TreeNode(2);

console.log(inorderSuccessor(root, p))


// [5,3,6,1,4,null,null,null,2]
// 4