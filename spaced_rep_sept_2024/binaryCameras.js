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
var minCameraCover = function(root) {
    
    const dfs = (nde) => {
        if (!nde) return [0, 0]

        let [lConnect, lSum] = dfs(nde.left);
        let [rConnect, rSum] = dfs(nde.right);
        let newConnect = 0, newSum = 0
        if (!lConnect || !rConnect) {
            newConnect = 1; newSum = 1;
        }
        return [newConnect, newSum + lSum + rSum]
    }
    return dfs(root)
};