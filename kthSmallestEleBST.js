var kthSmallest = function(root, k) {
    
    const inOrderArray = [];

    const inorderTraversal = (node) => {
        if (!node || inOrderArray.length >= k) return;
        if (!node.left && !node.right) return inOrderArray.push(node.val)

        inorderTraversal(node.left)
        inOrderArray.push(node.val)
        inorderTraversal(node.right)
    }
    inorderTraversal(root)
    if (k > inOrderArray.length) return null;
    return inOrderArray[k-1]
};

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}


let root = new TreeNode(5)
root.left = new TreeNode(3)
root.right = new TreeNode(6)
// root.right.left = new TreeNode(7)
// root.right.right = new TreeNode(10)
root.left.right = new TreeNode(4)
root.left.left = new TreeNode(2)
root.left.left.left = new TreeNode(1)

console.log(kthSmallest(root, 3))

