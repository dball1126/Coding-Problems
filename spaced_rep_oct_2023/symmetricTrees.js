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
 * @return {boolean}
 */
// Iterative DFS...stack
// Time and Space: O(n)
var isSymmetric = function(root) {
    if (!root) return true;
    const stack = [[root.left, root.right]]

    while (stack.length) {
        let level = stack.pop();
        let left = [], right = [], n = level.length
        let j = n-1, i = 0
        while (i < j) {
            
            let v1 = level[i], v2 = level[j]
            if (!v1 && !v2) {
                i++; j--
                continue;
                }
            if ((!v1 || !v2) || (v1.val !== v2.val)) return false;
            left.push(v1.left, v1.right)
            right.unshift(v2.left, v2.right)
            i++; j--
        }
        if (left.length || right.length) {
            stack.push([...left,...right])
        }
    }
    return true;
};
