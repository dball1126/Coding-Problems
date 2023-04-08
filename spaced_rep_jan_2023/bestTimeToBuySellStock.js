/**
 * @param {number[]} prices
 * @return {number}
 */
// Time: O(n), Space: O(1)
 const maxProfit = (stocks) => {
    let profit = 0, min = stocks [0], max = -Infinity
    
    for (let i = 1; i < stocks.length; i++) {
        profit = Math.max (profit, stocks[i] - min)
        if (stocks[i] < min) {
            min = stocks[i]
            max = - Infinity
        } else if (stocks[i] > max) {
            max = stocks[i]
        }
        profit = Math.max (profit, max - min)
    } 
    return profit
}
console.log(maxProfit([7,1,5,3,6,4])) // = 5
