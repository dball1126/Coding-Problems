/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    let memo = [...new Array(n+1)]

    const dp = (num) => {
        if (num <= 1) return 1;
        if (memo[num]) return memo[num];
        memo[num] = 0

        for (let i = 1; i <= num; i++) {
            memo[num] += dp(i - 1) * dp(num - i)
        }

        return memo[num]
    }
    return dp(n)
};