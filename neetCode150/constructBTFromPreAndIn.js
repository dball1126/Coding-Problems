
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
 


// preorder: root, left, right
// inorder: left, root, right
// Time and Space: O(n)
var buildTree = function(preorder, inorder) {
    let idx = 0, inMap = new Map();
    inorder.forEach((n, i) => inMap.set(n, i))

    const dfs = (l, r) => {
        if (idx >= preorder.length || l > r) return null;
        let v = preorder[idx]
        let node = new TreeNode(v)
        idx++
        if (l === r) return node;
        let inIdx = inMap.get(v)
        node.left = dfs(l, inIdx - 1)
        node.right = dfs(inIdx + 1, r)

        return node;
    }
    return dfs(0, preorder.length-1)
};

