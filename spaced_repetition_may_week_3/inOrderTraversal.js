function TreeNode(val, left, right) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
}


var inorderTraversal = function(n) {
   let curr = n, stack = [], result = []
   while (curr || stack.length) {
       while (curr) {
           stack.push(curr)
           curr = curr.left
       }
       if (!curr) curr = stack.pop();
       result.push(curr.val)
       curr = curr.right;
   }
   return result;
}

const node1 = new TreeNode(1)
const node2 = new TreeNode(2)
const node3 = new TreeNode(3)
node1.right = node2
node2.left = node3

console.log(inorderTraversal(node1))