/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let n = coins.length
    let memo = [...new Array(amount + 1)]
    
    const dp = (a) => {
        if (a === amount) return 0
        if (a < 0) return Infinity
        if (memo[a] !== undefined) return memo[a]
        let min = Infinity
        for (let c of coins) {
            if (a + c <= amount && a + c > a) {
                min = Math.min(min, 1 + dp(a + c))
            }
        }
        return memo[a] = min
    }
    const val = dp(0,0)
    return val === Infinity ? -1 : val
};
console.log(coinChange( [357,239,73,52], amount = 9832))