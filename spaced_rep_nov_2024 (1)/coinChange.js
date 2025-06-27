/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

// Bottom-Up Dynamic Programming
// Time: O(n * m)...n for # of coins and m for amount
// Space: O(m)
var coinChange = function(coins, amount) {
    const dp = [...new Array(amount+1)].fill(Infinity)
    dp[0] = 0;
    for (let c of coins) {
        for (let a = 1; a <= amount; a++) {
            if (a - c >= 0) {
                dp[a] = Math.min(dp[a], 1 + dp[a - c])
            }
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount]
};
console.log(coinChange(coins = [1,2,5], amount = 11))
// = 1 + 5 + 5 = (3 coins)

