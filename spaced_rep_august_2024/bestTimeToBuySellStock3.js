/**
 * @param {number[]} prices
 * @return {number}
 */
// State Machine DP Pattern
// Top-Down Dynamic Programming
// Time and Space: O(n)...n is the length of our input
var maxProfit = function(prices) {
    let n = prices.length
    const memo = [...new Array(n+1)].map(a =>
                 [...new Array(3)].map(a =>
                 [...new Array(3)]))
    
    const dp = (idx, state, amt) => {
        if (idx >= n) return 0
        if (memo[idx][state][amt] !== undefined) {
            return memo[idx][state][amt]
        }
        if (amt <= 0) return 0
        let v1 = dp(idx+1, state, amt), v2 = 0

        if (state === 1) {
            v2 = dp(idx+1, 0, amt) - prices[idx]
        } else {
            v2 = dp(idx+1, 1, amt - 1) + prices[idx]
        }
        return memo[idx][state][amt] = Math.max(v1,v2)
    }
    return dp(0,1,2)
};
console.log(maxProfit([1,2,3,4,5]))// = 4 (buy day 1 sell on day 5)