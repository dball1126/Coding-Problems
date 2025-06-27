/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    if (amount === 0) return 0
    let memo = [...new Array(amount+1)]

    const dp = (amt) => {
        if (amt === 0) return 0
        if (amt < 0) return Infinity
        if (memo[amt] !== undefined) return memo[amt]
        memo[amt] = Infinity
        for (let i = 0; i < coins.length; i++) {
            if (amt - coins[i] >= 0  && (amt - coins[i]) < amt) {
                memo[amt] = Math.min(memo[amt], 1 + dp(amt - coins[i]))
            }
        }
        return memo[amt]
    }
    dp(amount)
    return (memo[amount] === Infinity || memo[amount] === undefined) ? -1 : memo[amount]
};
console.log(coinChange([1,2,5], amount = 0))