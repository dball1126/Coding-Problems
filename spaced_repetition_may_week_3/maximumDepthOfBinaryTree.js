function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
/**
 * Recursion, DFS
 * Time and Space: O(n)
 */
const maxDepth = (n) => {
    if (!n) return 0;
    return Math.max(maxDepth(n.left), maxDepth(n.right)) + 1;
}

const node1 = new TreeNode(1)
const node2 = new TreeNode(2)
const node3 = new TreeNode(3)
node1.left = node2
node1.right = node3

console.log(maxDepth(node1))
