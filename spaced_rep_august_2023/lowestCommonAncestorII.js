/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let found1 = found2 = result = null

    const dfs = (node) => {
        if (!node) return;

        if (p && node.val === p.val) found1 = p
        if (q && node.val === q.val) found1 = q

        if (found1 && found2) return node

        let left = dfs(node.left)
        let right = dfs(node.right)
        let v = ((p && node.val === p.val) || (q && node.val === q.val))
        if ((left && right || right && v || left && v) && !result) {
            return  result = node;
        }
        if (left) return left
        if (right) return right
        if (v) return v

    }

    dfs(root)
    return result
};