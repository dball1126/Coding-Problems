/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    const memo = [...new Array(n+1)]

    const dp = (num) => {
        if (num <= 1) return 1;
        if (memo[num] !== undefined) return memo[num]
        let val = 0

        for (let i = 1; i <= num; i++) {
            val += (dp(i-1) * dp(num - i))
        }
        return memo[num] = val
    }
    return dp(n)
};

var numTrees = function(n) {
    const dp = [...new Array(n+1)]
    dp[0] = 1; dp[1] = 1;
    
    for (let i = 1; i <= n; i++) {
        let val = 0
        for (let j = 1; j <= i; j++) {
            val += (dp[j-1] * dp[i-j])
        }
        dp[i] = val
    }
    return dp[n]
};
console.log(numTrees(3))