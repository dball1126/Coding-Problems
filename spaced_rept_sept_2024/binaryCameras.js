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

    const dfs = (nde, p) => {
        if (!nde) return [0,0,0]

        let [lc, ls, ln] = dfs(nde.left, true);
        let [rc, rs, rn] = dfs(nde.right, true);

        let c = 0, s = 0, n = 0

        if (ln || rn) {
            s = 1; c = 1
        } else if (!lc && !rc) {``
            if (!p) {
                s = 1; c = 1
            } else {
                n = 1;
            }
        }
        return [c, s + ls + rs, n]
    }
    let [c, s, n] = dfs(root, false)
    return s
};

