// Top-Down Dynamic Programming
// Time: O(n * m)...coins * amount
// Space: O(m)...amount
var coinChange = function(coins, amount) {
    if (amount === 0) return 0;
    const memo = [...new Array(amount+1)].fill()

    const dp = (a) => {
        if (a === 0) return 0;
        if (memo[a] !== undefined) return memo[a]
        memo[a] = Infinity

        for (let c of coins) {
            if ((a - c) >= 0 && (a - c) < a) {
                memo[a] = Math.min(memo[a], 1 + dp(a - c))
            }
        }
        return memo[a]
    }

    const result = dp(amount)
    if (result === Infinity) return -1;
    return result;
};

console.log(coinChange(coins = [1,2,5], amount = 11))// = 3