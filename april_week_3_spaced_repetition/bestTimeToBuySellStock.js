// Time: O(n)
// Space: O(1)
var maxProfit = function(prices) {
    if (prices.length <= 1) return 0;
    let profit = 0, buy = prices[0]

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < buy) {
            buy = prices[i]
        } else {
            profit = Math.max(profit, prices[i] - buy)
        }
    }
    return profit
};