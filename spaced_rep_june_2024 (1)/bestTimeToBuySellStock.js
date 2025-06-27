/**
 * @param {number[]} prices
 * @return {number}
 */
// Greedy
// Time: O(n)
// Space: O(1)
var maxProfit = function(prices) {
    let profit = -Infinity, n = prices.length
    let min = prices[0]  
    for (let i = 1; i < n; i++) {
        let v = prices[i]
        if (min < v) {
            profit = Math.max ( profit, v - min)
        }
        min = Math.min(min, v)
    } 
    return profit === -Infinity ? 0 : profit
};
console.log(maxProfit([7,1,5,3,6,4])) // = 5

