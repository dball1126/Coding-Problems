// Time: O(n)
// Space: O(1)
var maxProfit = function(prices) {
    if (prices.length <= 1) return 0;
    let max1 = 0, max2 = 0, buy = prices[0], maxProfit = 0

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < buy) {
            buy = prices[i]
        } else {
            maxProfit = Math.max(maxProfit, prices[i] - buy)
            
        }
    }
    return maxProfit
};
console.log(maxProfit(prices = [1,9,8,2,100])) // =106