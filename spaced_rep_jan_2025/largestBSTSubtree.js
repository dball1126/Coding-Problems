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
var largestBSTSubtree = function(root) {
    if  (!root) return 0;
    let max = 1;

    const dfs = (nde) => {
        let lmin = nde.val, lmax = nde.val ,lcnt = 0,rmin = nde.val ,rmax = nde.val,rcnt = 0
        if (nde.left){
            [lmin,lmax,lcnt] = dfs(nde.left)
        }
        if (nde.right) {
            [rmin,rmax,rcnt] = dfs(nde.right);
        }
        

        if (nde.val > lmin) {
            return [Infinity, Infinity, 0]
        }

        max = Math.max()
    }

    return max;
};