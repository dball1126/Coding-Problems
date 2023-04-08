var minCostClimbingStairs = function(n) {
    let dp = [...new Array(n.length+1)]
    dp[0] = n[0], dp[1] = n[1]
    for (let i = 2; i < n.length; i++) {
        dp[i] = Math.min(dp[i-1],dp[i-2]) + n[i]
    }
    return Math.min(dp[n.length-1], dp[n.length-2])
};