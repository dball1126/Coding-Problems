
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
 
/**
 * @param {number} n
 * @return {TreeNode[]}
 */


// Top-down Dynamic Programming
// Time: O((2^n) / 2) ...we skip even numbers hence why it's divided by two
// Space: O(n * (2^n))...we store up to n nodes during each stack in the memo map
var allPossibleFBT = function(num) {
    const memo = new Map()

    const interLeave = (n) => {
        if (n <= 0) return []
        if (n === 1) return [new TreeNode(0)]
        if ((n / 2) === 0) return []
        if (memo.has(n)) return memo.get(n)
        const trees = []

        for (let i = 2; i <= n; i+=2) {
            let left = interLeave(i - 1), right = interLeave(n - (i))

            for (let l of left) {
                for (let r of right) {
                    trees.push(new TreeNode(0, l, r))
                }
            }
        }
        memo.set(n, trees)
        return trees;
    }
  return interLeave(num)
};
console.log(allPossibleFBT(5))

