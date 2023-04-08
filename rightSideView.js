var rightSideView = function(root) {
    if (!root) return [];
    const result = [];
    let queue = [root]
    let queueLevel = []
    while(queue.length) {
        let node = queue.shift();

        // collect children
        if (node.left) queueLevel.push(node.left)
        if (node.right) queueLevel.push(node.right)

        if (queue.length === 0) {
            result.push(node.val)
            queue.push(...queueLevel.slice(0))
            queueLevel = [];
        }
    }
    return result
}


function TreeNode(val, left, right) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }

let root = new TreeNode(8)
root.left = new TreeNode(5)
root.right = new TreeNode(4)
root.left.right = new TreeNode(7)
root.left.right.right = new TreeNode(12)
root.left.left = new TreeNode(9)
root.left.right.left = new TreeNode(1)
root.left.right.right.left = new TreeNode(2)
root.right.right = new TreeNode(11)
root.right.right.left = new TreeNode(3)

console.log(rightSideView(root))