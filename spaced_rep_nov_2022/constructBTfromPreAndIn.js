// Depth-First-Search
// Time and Space: O(n)
var buildTree = function(preorder, inorder) {
    if (!inorder.length) return null;
    let inMap = new Map(), index = 0
    inorder.forEach((v, i) => inMap.set(v, i))
    
    const dfs = (s, e) => {
      if (index > preorder.length-1 || s > e) return null
        let val = preorder[index]
        let node = new TreeNode(val)
        index +=1
        if (s === e) return node;

        node.left = dfs(s, inMap.get(val) - 1)
        node.right = dfs(inMap.get(val) + 1, e)

        return node
    }
    return dfs(index, preorder.length-1)
};
