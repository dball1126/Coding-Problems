const sumOfLeftLeaves = (node) => {
    if (!node) return 0;
    let sum = 0;

    const helper = (node, side) => {
        if (!node) return 0;
        if (side === 'left' && !node.left && !node.right) {
            // This means we hit a leaf
            sum += node.val
        }
        helper(node.left, 'left')
        helper(node.right, 'right')
    }
    helper(node, undefined)
    return sum;
}

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

const node = new TreeNode(1)
node.left = new TreeNode(2)
node.right = new TreeNode(3)
node.left.left = new TreeNode(4)
node.left.right = new TreeNode(5)



console.log(sumOfLeftLeaves(node))