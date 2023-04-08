/**
 * Dynamic Programming
 * Time: O(n * m)  n for coins * m for amount
 * Space: O(m) m for amount
 */
var coinChange = function(coins, amount) {
    if (amount === 0) return 0
    let memo = new Array(amount + 1).fill(undefined)
    memo[0] = 0
    const dp = (idx, sum) => {
        if (sum === 0) return 0
        if (memo[sum]) return memo[sum]
        let value = Infinity
        for (let i = idx; i < coins.length; i++) {
            let val = sum - coins[i]
            if (val >= 0 && val < sum) {
                let nextVal = dp(0, val)
                if (nextVal !== undefined && nextVal !== -1) {
                    value = Math.min(value, nextVal + 1)
                }
            }
        }
        if ( value === Infinity) value = -1
        memo[sum] = value
        return memo[sum]
    }
    dp(0, amount)
    return memo[amount]
};

console.log(coinChange([5,3],7))