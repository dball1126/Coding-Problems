/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

// Bottom-Up Dynamic Programming
// Time: O(n * m)...n for coins and m for amount
// Space: O(m) for amounht
var coinChange = function(coins, amount) {
    let dp = [...new Array(amount+ 1)].fill(0)

    for (let a = 1; a <= amount; a++) {
        let v = Infinity
        for (let c of coins) {
            if (a -c >= 0) {
                v = Math.min(v, dp[a - c]+1)
            }
        }
        dp[a] = v
    }
    return dp[amount] === Infinity ? -1 : dp[amount]
};
console.log(coinChange(coins = [1,2,5], amount = 11)) // = 3

