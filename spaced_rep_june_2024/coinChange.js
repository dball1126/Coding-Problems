/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// Bottom-Up Dynamic Programming
// 0/1 Knapsack (Unbounded)
// Time: O(n * m)...n for coins length and m for amount
// Space: O(m)
var coinChange = function(coins, amount) {

    const dp = [...new Array( amount+ 1)].fill(Infinity)
    dp[0] = 0;

    for (let a = 1; a < dp.length; a++) {
        let v = Infinity

        for (let c of coins) {
            if (a - c >= 0 && a - c < a) {
                v = Math.min(v, 1 + dp[a - c])
            }
        }

        dp[a] = v
    }
    return dp[amount] === Infinity ? -1 : dp[amount]
};
console.log(coinChange(coins = [1,2,5], amount = 11)) // = 3
// 5 + 5 + 1 = 11 (which is 3 coins)

