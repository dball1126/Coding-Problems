/**
 * DP, Time: O(n), Space: O(1)
 */
var maxProfit = function(prices) {
    if (prices.length <= 1) return 0;
    let max = 0;
    for (let i = 1; i < prices.length; i++) {
        max = Math.max(prices[i] - prices[i-1], max)
        prices[i] = Math.min(prices[i], prices[i-1])
    }
    return max
};