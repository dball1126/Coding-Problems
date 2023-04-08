/**
 * BFS. Level order Traversal
 * Space Complexity O(n) we need to at most store the entire last level in our queue.
 * Time complexity O(n) we need to traverse every node
 */

var largestValues = function(root) {
    if (!root) return [];
    let [result, max, queue, children] = [[], undefined, [root], []]

    while (queue.length) {
        let node = queue.shift();
        if (max === undefined) max = node.val;

        if (!queue.length) {
            result.push(Math.max(max, node.val))
            max = undefined
        } else {
            max = Math.max(max, node.val);
        }

        // collect the children;
        if (node.left) children.push(node.left)
        if (node.right) children.push(node.right)

        // check for end of level
        if (!queue.length) {
            queue.push(...children)
            children = [];
        }
    }
    return result;
};