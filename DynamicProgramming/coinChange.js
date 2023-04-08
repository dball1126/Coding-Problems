/**
 * State Var: a for amount remaining
 * Base Case: 0 if amount is 0
 * Recurrence Relation:
 *  amt = Infinity
 *  for c .... of coin
 *      if a -c >= 0 && a <= c
 *          amt = Math.min(amt, 1 + dp(a-c))
 * return amt
 * 
 * Time Complexity: O(n * m)  coins * amount
 * Space Complexity: O(m) the amount
 */
// Top-Down
var coinChange = function(coins, amount) {
    const memo = [...new Array(amount+1)].fill(-1)

    const dp = (a) => {
        if (a === 0) return 0;
        if (memo[a] !== -1) return memo[a];
        memo[a] = Infinity;
        for (let c of coins) {
            // console.log("coin: " + c)
            if (a - c >= 0 && a >= c) {
                memo[a] = Math.min(memo[a], 1 + dp(a-c))
            }
        }
        return memo[a];
    }
    const result = dp(amount)
    return result === Infinity ? -1 : result;
}
// Bottom-Up
var coinChange = function(coins, amount) {
    if (amount === 0) return 0;
    const dp = [...new Array(amount+1)].fill(Infinity);
    dp[0] = 0
    for (let a = 1; a <= amount; a++) {
        for (let c of coins) {

            if (a - c >= 0 && a >= c) {
                dp[a] = Math.min(dp[a], 1 + dp[a-c])
            }
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount]
}

console.log(coinChange([357,239,73,52],
    9832))