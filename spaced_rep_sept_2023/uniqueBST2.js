
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
// Dynamic prorgramming / Backtracking
var generateTrees = function(n) {
    const memo = new Map()    
    const generate = (s, e) => {
        if (e < s) return [null]
        if (s === e) return [new TreeNode(s)]
        if (memo.has(s + "" + e)) return [...memo.get(s + "" + e)]
        const allCombos = []
        for (let i = s; i <= e; i++) {
            let left = generate(s, i-1)
            let right = generate(i+1, e)
            for(let l of left) {
                for (let r of right) {
                    allCombos.push(new TreeNode(i, l, r))
                }
            }
        }
        memo.set(s + "" + e, allCombos)
        return allCombos
    }
    return generate(1, n)
};

console.log(generateTrees(3))