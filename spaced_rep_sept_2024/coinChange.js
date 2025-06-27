/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// Unbounded Knapsack DP Pattern
// Bottom-Up Dynamic Programming
// Time: O(n * m)...c for amt of coins and m for the amount
// Space: O(m)
var coinChange = function(coins, amount) {
    const dp = [...new Array(amount+1)].fill(Infinity)
    dp[0] = 0

    for (let c of coins) {
        for (let a = 0; a <= amount; a++) {
            if (a - c >= 0) {
                dp[a] = Math.min(dp[a], dp[a - c] + 1)
            }
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount]
};
console.log(coinChange(coins = [1,2,5], amount = 11)) // = 3 (5 + 5 + 1)


