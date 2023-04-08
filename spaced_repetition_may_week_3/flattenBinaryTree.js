function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
}
const node1 = new TreeNode(1)
const node2 = new TreeNode(2)
const node3 = new TreeNode(3)
node1.right = node2
node2.left = node3
/**
 * DFS & preorder traversal
 * Time and Space: O(n) n for words
 */
var flatten = function(n) {
    let curr = n, stack = [], prev = null
    while (curr || stack.length) {
        if (!curr) curr = stack.pop();
        
        if (curr.right) stack.push(curr.right)
        if (curr.left) stack.push(curr.left)

        if (!prev) {
            prev = curr;
        } else {
            prev.right = curr
        }
        prev.left = null;
        prev = curr
        curr = null
    }
    return n
};

console.log(flatten(node1))