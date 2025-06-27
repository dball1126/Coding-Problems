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
 * @return {number}
 */
var minCameraCover = function(root) {
    if (!root) return 0;
    if (!root.left && !root.right) return 1;

    const dfs = (nde) => {
        if (!nde) return [0,1,0,0,0,0]
        if (!nde.left && !nde.right) return [1,1,0,0,1,1]

        let [x,y,r,k,t,z] = dfs(nde.left), [a,b,c,d,e,f] = dfs(nde.right)
        console.log([c+k, 0, x+a + 1, 1])
        let v1 = x + a,v2,v3,v4,v5,v6;
        v4 = k + d
        if (r ===1 || c === 1) {
            v1 +=1
            v2 = 0
            v3 = 0
        } else {
            if (v2 === 0) v3 = 1
            v2 = 0
        }
        
        return [c+k, 0, x+a + 1, 1]
    }
    let [v1,v2,v3,v4] = dfs(root)

    return Math.min(v1,v3)
};