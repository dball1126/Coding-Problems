
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * Time and Space: O(n)
 */

var buildTree = function(inorder, postorder) {
    let map = new Map(), index = postorder.length-1;
    for (let i = 0; i < inorder.length; i++) {
        map.set(inorder[i], i)
    }
    const dfs = (s, e) => {
        if (s === undefined || e === undefined) return null

        if (s > e || index > 0) return null
        let val = postorder[index]
        index -= 1;

        let root = new TreeNode(val)
        root.right = dfs(map.get(val) + 1, e)
        root.left = dfs(s, map.get(val) - 1)

        return root;
    }
    return dfs(0, postorder.length-1)
};