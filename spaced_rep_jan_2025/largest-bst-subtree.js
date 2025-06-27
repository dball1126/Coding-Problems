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
 * @return {number}
 */
class Node {
    constructor(min, max, count) {
        this.min = min;
        this.max = max;
        this.count = count;
    }
}
var largestBSTSubtree = function(root) {
    if (!root) return 0;
    let max = 1;
    const dfs = (nde) => {
        if (!nde) {
            return new Node(Infinity, -Infinity, 0);
        }

        let left = dfs(nde.left), right = dfs(nde.right);

        if (nde.val > left.max && nde.val < right.min) {
            max = Math.max(max, 1 + left.count + right.count);
            let newMin = Math.max(left.max, nde.val);
            let newMax =  Math.min(nde.val, right.min);
            return new Node(newMin, newMax, 1 + left.count + right.count);
        } else {
            return new Node(-Infinity, Infinity, 0)
        }
    }
    dfs(root)
    return max;
};
