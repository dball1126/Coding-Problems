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
 * @return {number[][]}
 */
var verticalOrder = function(root) {
    
    const map = new Map();
    const result = []
    const q = [[[0, root]]]

    let offsetL = 0, offsetR = 0
    
    let dfs = (col, nde) => {
        if (!nde.left && !nde.right) return
        offsetL = Math.min(offsetL, col)
        offsetR = Math.max(offsetR, col)
        dfs(col-1, nde.left)
        dfs(col+1, nde.right)
    }
    dfs(0, root)

    offsetL = Math.abs(offsetL)+1

    let newArr = [...new Array(Math.abs(offsetL + 1 + offsetR + 1))].fill([])

    while (q.length) {
        let currLevel = q.shift();
        let level = []

        for (let [col, nde] of currLevel) {

            let idx = col < 0 ? col + offsetL : col
            newArr[idx].push(nde.val)
            
            if (nde.left) level.push([col-1, nde.left])
            if (nde.right) level.push([col+1, nde.right])
        }


        if (level.length) q.push(level)
    }

    for (let lvl of newArr) {
        if (lvl.length) {
            result.push(levl)
        }
    }
    return result
};