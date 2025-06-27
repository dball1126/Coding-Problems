/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0, minPrice = prices[0];

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > minPrice) {
            max = Math.max(max, prices[i] - minPrice);
        }
        minPrice = Math.min(minPrice, prices[i]);
    }

    return max;
};