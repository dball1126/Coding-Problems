/**
 * DP, Time: O(n), Space: O(1)
 */
var maxProfit = function(prices) {
    let maximum = 0, currMax = 0, currMin = prices[0];
    
    for (let i = 1; i < prices.length; i++) {
        let sum = prices[i] - prices[i-1];
        let sum2 = prices[i] - currMin

        currMax = Math.max(sum + currMax, sum2, currMax)
        currMin = Math.min(currMin, prices[i])
        if (i === prices.length-1) {
            maximum = Math.max(maximum, currMax)
        }
    }
    return maximum;
};

console.log(maxProfit(prices = [1,2,3,4,5]))