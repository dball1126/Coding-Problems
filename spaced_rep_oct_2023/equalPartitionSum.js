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
var checkEqualTree = function(root) {
    if (!root) return false;
    let valid = false;    

    const dfs = (nde, sum, initial) => {
        if (valid || !nde) return 0;
        if (!nde.left && !nde.right) return nde.val;

        let leftVal = dfs(nde.left, sum + nde.val, false), rightVal = dfs(nde.right, sum + nde.val, false)

        if (!initial && (nde.val + leftVal + rightVal === sum)) {
            valid = true;
            return sum;
        } else if (nde.val + sum + leftVal === rightVal) {
            valid = true;
            return rightVal
        } else if (nde.val + sum + rightVal === leftVal) {
            valid = true;
            return leftval;
        } else {
            return nde.val + left.val + right.val;
        }
    }
    dfs(root, 0, true)
    return valid
};