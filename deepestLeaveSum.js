var deepestLeavesSum = function(root) {
    let hash = {};

    const helper = (node, level) => {
        if (!node) return 0;
        if (!node.left && !node.right) {
            if (hash[level]) {
                hash[level] += node.val
            } else {
                hash[level] = node.val
            }
        }
        level += 1
        helper(node.left, level)
        helper(node.right, level)
        return node;
    }
    helper(root, 0)

    let max = Math.max(...Object.keys(hash))
    if (max === 0) return 0
    return hash[max];
};

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

let root = new TreeNode(1)
// root.left = new TreeNode(2)
// root.right = new TreeNode(3)
// root.right.right = new TreeNode(6)
// root.right.right.right = new TreeNode(8)
// root.left.right = new TreeNode(5)
// root.left.left = new TreeNode(4)
// root.left.left.left = new TreeNode(7)



console.log(deepestLeavesSum(root))