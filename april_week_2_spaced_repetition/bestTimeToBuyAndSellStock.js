/**
 * Kadane's algorithm
 * Keep track of lowest stock
 * Time: O(n)
 * Space: O(1)
 */
var maxProfit = function(prices) {
    let max = 0;
    let minStock = prices[0];
    for (let i = 1; i < prices.length; i++) {
        let curr = prices[i]
        if (minStock > curr) {
            minStock = curr
            curr = minStock
        }
        max = Math.max(max, curr - minStock)
    }
    return max
}

console.log(maxProfit( prices = [7,6,4,3,1]))