/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
// Iterative Dept-First-Search
// Time and Space: O(n)
var binaryTreePaths = function(root) {
    if (!root) return [""]
    const paths = [], stack = [["", root]]

    while (stack.length) {
        let [p, nde] = stack.pop();
        p += nde.val
        if (nde.left || nde.right) p += "->"
        if (nde.left) stack.push([p, nde.left])
        if (nde.right) stack.push([p, nde.right])

        if (!nde.left && !nde.right) paths.push(p)
    }

    return paths;
};

