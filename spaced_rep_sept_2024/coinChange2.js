/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
// Unbounded Knapsack DP Pattern
// Bottom-Up Dynamic Programming
// Time: O(n * m)...n for amount and m for coins
// Space: O(n)
var change = function(amount, coins) {
    const dp = [...new Array(amount+1)].fill(0)
    dp[0] = 1

    for (let c of coins) {
        for (let a = 1; a <= amount; a++) {
            if (a - c >= 0 && a - c < a) {
                dp[a] += dp[a- c]
            }
        }
    }
    return dp[amount]
};
console.log(change(amount = 5, coins = [1,2,5])) // = 4
// 1+1+1+1+1, 2+2+1, 5, 1+1+1+2

