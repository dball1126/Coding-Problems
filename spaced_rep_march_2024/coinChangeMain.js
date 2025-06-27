/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let memo = [...new Array(amount+1)].fill(undefined)
    
    const dp = (idx, a) => {
        if (a === 0) return 0;
        if (a > amount || idx >= coins.length) return Infinity
        let minVal = Infinity
        for (let i = idx; i < coins.length; i++) {
            let val = undefined
            if (a - coins[i] >= 0 && a - coins[i] < a) {
                if (val === undefined) val = 0
                val += dp(i, a - coins[i])
            }
            if (val !== undefined) {
                val += 1 + val
                minVal = Math.min(minVal, val)
            }
        }

        return memo[a] = minVal
    }
    return dp(0, amount)
};
console.log(coinChange([1,2,5], amount = 11))