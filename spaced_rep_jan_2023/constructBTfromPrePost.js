function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

// Depth-First-Search
// pre: Root, Left, Right || post: Left, Right, Root;
// Time: O(n)...for nodes in preorder
// Space: O(n + m) for preMap and postMap
var constructFromPrePost = function(preorder, postorder) {
    const preMap = new Map(), postMap = new Map();
    preorder.forEach((v, i) => preMap.set(v, i))  
    postorder.forEach((v, i) => postMap.set(v, i))  
    let root = null;
    let idx = 0;
    const dfs = (l, r) => {
        if (l > r || idx >= preorder.length) return null;
        let val = preorder[idx]
        idx++
        let node = new TreeNode(val) 
        if (!root) root = node
        if (l === r) return node

        let rightVal = postorder[postMap.get(val) - 1]
        node.left = dfs(l+1, preMap.get(rightVal) - 1)
        node.right = dfs(preMap.get(rightVal), r)
        return node;
    }
    dfs(0, preorder.length-1)
    return root;
};

