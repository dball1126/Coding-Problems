function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
// -----------------------------------------------------
/**
 * DFS: both trees at the same time
 */
 var mergeTrees = function(root1, root2) {
    if (!root1 && !root2) return root1
    const dfs = (n1, n2) => {
        let sum1 = n1 ? n1.val : 0
        let sum2 = n2 ? n2.val : 0
        let n1Left = n1 && n1.left ? n1.left : undefined
        let n2Left = n2 && n2.left ? n2.left : undefined
        let n1Right = n1 && n1.right ? n1.right : undefined
        let n2Right = n2 && n2.right ? n2.right : undefined
        let node = new TreeNode(sum1 + sum2)
        if((n1Left) || (n2Left)) node.left = dfs(n1Left, n2Left)
        if((n1Right) || (n2Right)) node.right = dfs(n1Right, n2Right)
        return node
    }
    return dfs(root1, root2)
};