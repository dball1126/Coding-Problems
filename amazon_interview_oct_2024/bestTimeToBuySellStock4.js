/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
// State Machine DP Pattern
// Top-Down Dynamic Programming
// Time & Space: O(n * k)...n for length of prices
var maxProfit = function(k, prices) {
    let n = prices.length
    const memo = [...new Array(n+1)].map(a => 
                [...new Array(3)].map(a => 
                [...new Array(k+1)]))

    const dp = (idx, buy, amt) => {
        if (idx >= n || amt >= k) return 0
        if (idx === n-1) {
            if (buy === 1) return 0
            return prices[idx]
        }
        if (memo[idx][buy][amt] !== undefined) {
            return memo[idx][buy][amt]
        }

        let nx = dp(idx+1, buy, amt)
        let nx2 = 0
        if (buy === 1) {
            nx2 = dp(idx+1, 0, amt) - prices[idx]
        } else {
            nx2 = dp(idx+1, 1, amt+1) + prices[idx]
        }
        return memo[idx][buy][amt] = Math.max(nx, nx2)
    }
    return dp(0,1, 0)
};
console.log(maxProfit(k = 2, prices = [3,2,6,5,0,3]))
// = 7  ((6-2) + (3-0))


