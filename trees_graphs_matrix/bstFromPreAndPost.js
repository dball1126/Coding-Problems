
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}


/**
 * Time and Space: O(n + m) for storing idxs and traversing each array
 */
 var constructFromPrePost = function(preorder, postorder) {
    
    let preMap = new Map(), postMap = new Map()
    for (let i = 0; i < postorder.length; i++) {
        preMap.set(preorder[i], i)
        postMap.set(postorder[i], i)
    }

    const dfs = (s, e) => {
        if (s > e) return null
        let root = new TreeNode(preorder[s])
        if (s === e) return root

        let postIdx = postMap.get(preorder[s])
        let postVal = postorder[postIdx - 1]
        let midIdx = preMap.get(postVal)
        root.left = dfs(s+1, midIdx-1)
        root.right = dfs(midIdx, e)
        return root
    }
    return dfs(0, postorder.length-1)
};