var coinChange = function(coins, amt) {
    let dp = [...new Array(amt+1)].fill(Infinity)
    dp[0] = 0
    for (let i = 1; i <= amt; i++) {
        for(let c of coins) {
            if (i - c >= 0 && i - c <= i) {
                dp[i] = Math.min(dp[i], dp[i-c] + 1)
            }
        }
    }
    if (dp[amt] === Infinity) return -1
    return dp[amt]
};