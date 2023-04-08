// (DFS)Time and Space: O(h)...height of tree
var deleteNode = function(root, key) {
    if (!root) return root
    const getSuccessor = (node) => {
        while(node.left) node = node.left
        return node;
    }
    const getPredecessor = (node) => {
        while(node.right) node = node.right
        return node;
    }
    // handle node found
    if (root.val === key) {
        if (!root.right && !root.left) {
            root = null;
        } else if (root.right) {
            let successor = getSuccessor(root.right)
            root.val = successor.val
            root.right = deleteNode(root.right, root.val)
        } else {
            let predecessor = getPredecessor(root.left)
            root.val = predecessor.val;
            root.left = deleteNode(root.left, root.val)
        }
    } else if (root.val > key) {
        root.left = deleteNode(root.left, key)
    } else {
        root.right = deleteNode(root.right, key)
    }
    return root;
};

