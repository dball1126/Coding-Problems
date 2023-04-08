// BFS, Time and Space: O(n^2)
class Node {
    sum = 0; path = []; node = null
    constructor(sum, path, node) {
        this.sum = sum; this.path = path; this.node = node;
    }
}
var pathSum = function(root, targetSum) {
    if (!root) return [];
    let allPaths = [], queue = [new Node(root.val, [root.val], root)]
    while (queue.length) {
        let curr = queue.shift()
        let currNode = curr.node;
        if (currNode.left || currNode.right) {
            if (currNode.left) {
        queue.push(new Node(curr.sum + currNode.left.val, [...curr.path, currNode.left.val], currNode.left))
            }
            if (currNode.right) {
     queue.push(new Node(curr.sum + currNode.right.val, [...curr.path, currNode.right.val], currNode.right))
            }
        } else {
            if (curr.sum === targetSum) allPaths.push([...curr.path])
        }
    }
    return allPaths;
};
