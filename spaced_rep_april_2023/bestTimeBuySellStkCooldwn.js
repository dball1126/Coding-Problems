// Top-Down Dynamic Programming
// Time and Space: O(n)...(we hit every index at most 2 times)
var maxProfit = function(prices) {
    if (prices.length <= 1) return 0
    let memo1 = [...new Array(prices.length+1)].fill(-Infinity)
    let memo2 = [...new Array(prices.length+1)].fill(-Infinity)
    const dp = (i, action) => {
        memo = memo1
        if (action === 0) memo = memo2
        if (i >= prices.length || action === 1 && i >= prices.length-1) {
            return 0
        }
        if (memo[i] !== -Infinity) return memo[i]
        if (action === 1) {
            memo[i] = Math.max(dp(i+1, 0) - prices[i], dp(i+1, 1))
        } else {
            memo[i] = Math.max(prices[i] + dp(i+2, 1), dp(i+1, 0))
        }
        return memo[i]
    }
    dp(0, 1)
    return memo1[0]
};

console.log(maxProfit(prices = [1,2,3,0,2]))