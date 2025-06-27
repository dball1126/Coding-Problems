/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// Time and Space :(n)
var balanceBST = function(root) {
    if (!root) return null

    const flatten = (nde) => { // O(n)
        if (!nde) return []
        return [...flatten(nde.left), nde, ...flatten(nde.right)]
    }
    let queue = flatten(root)

    const buildBst = (l, r) => { // O(n)
        if (l > r) return null;
        let mid = Math.floor((r + l) / 2)
        let nde = queue[mid]
        
        let left = buildBst(l, mid-1)
        let right = buildBst(mid +1, r)
        nde.left = left;
        nde.right = right;
        return nde;
    }
    
    return buildBst(0, queue.length-1)
};