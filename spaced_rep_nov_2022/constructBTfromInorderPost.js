// Depth-First-Search
// Time and Space: O(n)
var buildTree = function(inorder, postorder) {
    if (!inorder.length) return null;
    let inMap = new Map(), index = inorder.length-1
    inorder.forEach((v, i) => inMap.set(v, i))
    
    const dfs = (s, e) => {
      if (index < 0 || s > e) return null
        let val = postorder[index]
        let node = new TreeNode(val)
        index -=1
        if (s === e) return node;

        node.right = dfs(inMap.get(val) + 1, e)
        node.left = dfs(s, inMap.get(val) - 1)

        return node
    }
    return dfs(0, postorder.length-1)
};
