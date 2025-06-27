/**
 * @param {number[]} prices
 * @return {number}
 */

// Greedy
// Time: O(n)
// Space: O(1)
var maxProfit = function(prices) {
    if (prices.length <= 1) return 0;
    let profit = 0, min = prices[0], currMax = prices[0], n = prices.length

    for (let i = 1; i < n; i++) {
        if (prices[i] < min) {
            min = prices[i]
            currMax = min
        }
        currMax = Math.max(currMax, prices[i])
        if (i+1 >= n || (i+1 < n && (prices[i+1] - min) < (currMax - min))) {
            profit = Math.max(profit, profit + currMax - min)
            min = prices[i+1], currMax = prices[i+1]
        }

    }
    return profit
};

console.log(maxProfit( [2,4,1]))