/**
 * Kadane's Algorithm.
 * O(n) Time
 * O(1) Space
 */
var maxProfit = function(prices) {
    let curr = prices[0];
    let max = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < curr) {
            curr = prices[i]
        } else {
            max = Math.max(max, prices[i] - curr)
        }
    }
    return max;
};

console.log(maxProfit(prices = [7,1,5,3,6,4]))