function TreeNode(val, left, right) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }


/**
 * Time and Space O(n)
 */
var buildTree = function(preorder, inorder) {
    let map = new Map();
    for (let i = 0; i < inorder.length; i++) {
        map.set(inorder[i], i)
    }

    let index = 0;
    const dfs = (arr, s , e) => {
        if (s === undefined || e === undefined) return null
        if (s > e) return null
        let tempIDX = index
        let root = new TreeNode(arr[tempIDX])
        index++
        if (!map.has(arr[tempIDX])) return root

        let idx = map.get(arr[tempIDX])
        root.left = dfs(arr, s, idx - 1)
        root.right = dfs(arr, idx + 1, e)

        return root;
    }
    return dfs(preorder, 0, preorder.length-1)
};