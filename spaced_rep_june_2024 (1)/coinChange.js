/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let dp = [...new Array(amount+1)].fill(Infinity)
    dp[0] = 0

    for (let a = 1; a <= amount; a++) {
        let min = Infinity

        for (let c of coins) {

            if ((a - c) >= 0 && (a - c) < a) {
                min = Math.min(min, dp[a - c] + 1)
            }
        }
        dp[a] = min
    }
    return dp[amount] === Infinity ? -1 : dp[amount]
};
console.log(coinChange(coins = [1,2,5], amount = 11))// = 3

