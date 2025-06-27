/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let low = prices[0]
    let max = 0
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < low) {
            low = prices[i]
        } else {
            max = Math.max(max, prices[i] - low)
        }
    }
    return max
};
console.log(maxProfit([7,1,5,3,6,4]))