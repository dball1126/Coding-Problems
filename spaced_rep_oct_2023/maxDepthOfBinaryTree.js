/**
 * @param {TreeNode} root
 * @return {number}
 */

// Depth First Search
// Time and Space: O(n)

// Recursive
var maxDepth = function(root) {
    if (!root) return 0
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};
// Iterative
var maxDepth = function(root) {
    if (!root) return 0
    let max = 0, stack = [[root, 0]]
    
    while (stack.length) {
        let [nde, depth] = stack.pop();
        depth += 1
        max = Math.max(max, depth)
        if (nde.left) stack.push([nde.left, depth])
        if (nde.right) stack.push([nde.right, depth])
    }
    return max
};
