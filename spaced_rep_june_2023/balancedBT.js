

var isBalanced = function(root) {

    let balanced = true;
    
    const getHeight = (n) => {
        if (!n) return 0;
        return Math.max(getHeight(n.left), getHeight(n.right)) + 1;
    }

    const checkIfBalanced = (node) => {
        if (!balanced || !node) return false;

        let leftHeight = getHeight(node.left), rightHeight = getHeight(node.right)
        let diff = Math.abs(leftHeight - rightHeight)
        if (balanced) balanced = diff <= 1
        checkIfBalanced(node.left)
        checkIfBalanced(node.right)
        return balanced
    }
    checkIfBalanced(root)
    return balanced;
};