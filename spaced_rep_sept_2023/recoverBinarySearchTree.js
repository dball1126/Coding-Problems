
    function TreeNode(val, left, right) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
 
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
    let found = false;

    const dfs = (nde, max, min) => {
        if (found || !nde) return;
        const temp = nde.val
        if (nde.val < min.val) {
            found = true;
            nde.val = min.val
            return min.val = temp;
        } else if (nde.val > max.val) {
            found = true;
            nde.val = max.val;
            return max.val = temp;
        }
        dfs(nde.left, nde, min)
        dfs(nde.right, max, nde)
    }

    dfs(root, new TreeNode(Infinity), new TreeNode(-Infinity))
};