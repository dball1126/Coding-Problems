/**
 * Definition for a binary tree node.

 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
// Top-Down Dynamic Programming
// Time: O(n^2)
// Space: O(n)
var generateTrees = function(n) {
    const memo = new Map()
    const intervals = (l, r) => {
        if (l > r) return [null]
        let k = l + ":" + r
        if (memo.has(k)) return memo.get(k)
        const combos = []
        for (let i = l; i <= r; i++) {
            let left = intervals(l, i-1)
            let right = intervals(i+1, r)
            for (let lef of left) {
                for (let rht of right) {
                    let node = new TreeNode(i)
                    node.left = lef; node.right = rht;
                    combos.push(node)
                }
            }
        }
        memo.set(k, combos)
        return combos
    }
    return intervals(1, n)
};
console.log(generateTrees(3))