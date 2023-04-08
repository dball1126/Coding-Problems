function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function(root, p) {
    let successor = null;
    let foundNode = null;

    const getSuccessor = (node) => {
        if (!node) return;
        
        if (node.val === p.val) {
            foundNode = node;
        }

        if (node.val > p.val) {
            successor = node;
           return getSuccessor(node.left)
        } else {
            return getSuccessor(node.right)
        }


    }
    getSuccessor(root)

    if (foundNode && foundNode.right && !successor) {
        return foundNode.right
    } else {
        return successor
    }
};

// [6,2,8,0,4,7,9,null,null,3,5]
// 2

const root = new TreeNode(6)
root.left = new TreeNode(2)
root.right = new TreeNode(8)
root.left.left = new TreeNode(0)
root.left.right = new TreeNode(4)
root.right.left = new TreeNode(7)
root.right.right = new TreeNode(9)
root.left.right.left = new TreeNode(3)
root.left.right.right = new TreeNode(5)

const p = new TreeNode(0)

console.log(inorderSuccessor(root, p))