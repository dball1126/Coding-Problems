
  function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }

var levelOrderBottom = function(root) {
    if (!root) return [];
    let [result, queue, children] = [[root], [root], []]

    while (queue.length) {
        let node = queue.shift();

        if (node.left) children.push(node.left)
        if (node.right) children.push(node.right)
        if (!queue.length) {
            let copy = children.slice(0)
            let copy2 = children.slice(0)
            if (children.length > 0) {
                queue.push(...copy2)
                result.unshift(copy)
            }
            children = [];
        }
    }
    return result;
};

const node = new TreeNode(3)
node.left = new TreeNode(9)
node.right = new TreeNode(20)
node.left.left = new TreeNode(15)
node.left.right = new TreeNode(7)
node.left.left.left = new TreeNode(14)
node.left.left.right = new TreeNode(16)
node.left.right.right = new TreeNode(17)


console.log(levelOrderBottom(node, 10));