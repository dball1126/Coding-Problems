/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
// Top-Down Dynamic Programming
// Catalan Numbers
// Time: O(n^2)
// Space: O(n)
var generateTrees = function(n) {
    let memo = new Map()
    const intervals = (l, r) => {
        if (l <= r) return [new TreeNode(l)]
        if (memo.has(l + ":" + r)) return [...memo.get(l + ":" + r)]
        const combos = []
        for (let i = l; i <= r; i++) {
            let left = [], right = []
            if ((i - l) >= 1) left = intervals(i - l, i)
            if ((r - i) >= 1) right = intervals(i, r - i)

            if (left.length && right.length) {
                for (let lef of left) {
                    for (let rht of right) {
                        let node = new TreeNode(i);
                        node.left = Object.assign(lef); node.right = Object.assign(rht);
                        combos.push(node)
                    }
                 }
            } else if (left.length) {
                for (let lef of left) {
                    let node = new TreeNode(i);
                    node.left = Object.assign(lef);
                    combos.push(node)
                }
            } else if (right.length) {
                for (let rht of right) {
                    let node = new TreeNode(i);
                    node.right = Object.assign(rht);
                    combos.push(node)
                }
            }
        }
        memo.set(l + ":" + r, combos)
        return combos
    }
    let allCombos = intervals(1, n)
    return allCombos
};
console.log(generateTrees(3))