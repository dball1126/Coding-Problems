function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
}

const node1 = new TreeNode(1)
const node2 = new TreeNode(2)
const node3 = new TreeNode(3)
const node4 = new TreeNode(4)
const node5 = new TreeNode(5)
node1.right = node3
node1.left = node2
node2.left = node4
node2.right = node5

var postorderTraversal = function(root) {
    let stack = [], curr = root, result = [], prev = null;
    while (curr || stack.length) {
        while (curr) {
            stack.push(curr)
            curr = curr.left;
        }
        if (!curr) curr = stack.pop();
        if (!prev && curr && curr.right || (prev && curr.right && prev.val !== curr.right.val)) {
            stack.push(curr)
            curr = curr.right;
        } else {
            prev = curr
            result.push(curr.val)
            curr = null;
        }
   }
   return result
};

console.log(postorderTraversal(node1))