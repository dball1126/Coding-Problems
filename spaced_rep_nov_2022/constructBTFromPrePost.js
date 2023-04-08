/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
 var constructFromPrePost = function(preorder, postorder) {
    if (!preorder.length) return null;
    let preMap = new Map(), postMap = new Map()
    preorder.forEach((v, i) => preMap.set(v, i))    
    postorder.forEach((v, i) => postMap.set(v, i))   
    
    const build = (s, e) => {
        if (s === undefined || e === undefined || e < 0 
            || s >= preorder.length || s > e) {
                return null
        }
        let node = new TreeNode(preorder[s])
        if (s === e ) return node
        let leftVal = preorder[s+1], rightVal = postorder[postMap.get(node.val) - 1]

        node.left = build(s+1, preMap.get(rightVal)-1)
        node.right = build(preMap.get(rightVal), e)
        return node
    }
    return build(0, preorder.length-1)
};
