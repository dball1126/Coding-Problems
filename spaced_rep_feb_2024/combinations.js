/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
// Backtracking
// Time: O(n!)
// Space: O(k)
var combine = function(n, k) {
    const result = []

    const backtrack = (curr, idx) => {
        if (curr.length === k) return result.push([...curr])
        if (idx > n) return

        for (let i = idx; i <= n; i++) {
            if (curr.length < k) {
                curr.push(i)
                backtrack(curr, i+1)
                curr.pop()
            }
        }
    }
    backtrack([], 1)
    return result;
};
console.log(combine(n = 4, k = 2))
// = [ [ 1, 2 ], [ 1, 3 ], [ 1, 4 ], [ 2, 3 ], [ 2, 4 ], [ 3, 4 ] ]