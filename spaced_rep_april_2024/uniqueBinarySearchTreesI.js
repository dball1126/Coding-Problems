/**
 * @param {number} n
 * @return {number}
 */
// Dynamic Programming
// Catalan numbers
// Time: O(n^2)
// Space: O(n)
var numTrees = function(n) {
    let memo = new Map()
    const intervals = (num) => {
        if (num <= 1) return num;
        if (memo.has(num)) return memo.get(num)
        let val = 0
        for (let i = 1; i <= num; i++) {
            let left = 1, right = 1;
            if (i - 1 > 1) left = intervals(i -1)
            if (num - i > 1) right = intervals(num - i)
            val += (left * right)
        }
        memo.set(num, val)
        return val
    }
    return intervals(n)
};
console.log(numTrees(3)) // = 5

