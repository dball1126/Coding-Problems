/**
 * @param {TreeNode} root
 * @return {boolean}
 */

// Iterative Depth-First-Search
// Time and Space: O(n)
var isValidBST = function(root) {
    let stack = [[root, -Infinity, Infinity]]
    while (stack.length) {
        let [nde, min, max] = stack.pop();

        if (!nde) continue;
        if (nde.val < min || nde.val > max) return false;
        stack.push([nde.left, min, nde.val])
        stack.push([nde.right, nde.val, max])
    }
    return true;
};
