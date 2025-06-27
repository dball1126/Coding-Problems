/**
 * @param {number} steps
 * @param {number} arrLen
 * @return {number}
 */
var numWays = function(steps, arrLen) {
    const memo = [...new Array(steps+1)].map(a => [...new Array(arrLen+1)])
    const dirs = [[-1], [1], [0]]
    const mod = (10**9) + 7

    const dp = (i, s) => {
        if (i < 0 || i >= arrLen) return 0
        if (s === 0) {
            if (i === 0) return 1
            return 0
        }
        if (memo[i][s] !== undefined) return memo[i][s]
        let val = 0
        for (let [idx] of dirs) {
            if (((i + idx) >= (s)) >= 0) {

                val += dp(i + idx, s-1)
                val %= mod
            }
        }
        return memo[i][s] = val
    }
    return dp(0, steps)
};
console.log(numWays(  steps = 430, arrLen = 148488))