/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// Unbounded KnapSack
// Bottom up Dynamic Programming
// Time: O(n * m)...n for coins and m for amount
// Space: m for amount
var coinChange = function(coins, amount) {
    const dp = [...new Array(amount+1)].fill(Infinity)
    dp[0] = 0
    for (let c of coins) {
        for (let a = 1; a <= amount; a++) {
            if (a - c >= 0) {
                dp[a] = Math.min(dp[a], dp[a - c] + 1)
            }
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount]
};
console.log(coinChange([1,2,5],11))