/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let l = coins.length
    const dp = [...new Array(amount+1)].fill(Infinity)
    dp[0] = 0

    for (let c of coins) { // usually the outter loop
        for (let r = 1; r <= amount; r++) { // usually the inner loop
            if ( r - c >= 0) {
                dp[r] = Math.min(dp[r], dp[r - c] + 1)
            }
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount]
};
console.log(coinChange(coins = [1,2,5], amount = 11))