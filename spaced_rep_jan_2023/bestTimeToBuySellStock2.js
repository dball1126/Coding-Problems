/**
 * @param {number[]} prices
 * @return {number}
 */
// Time: O(n), Space: O(1)
const maxProfit = (stocks) => {
    let allProfit = 0, min = stocks[0], max = -Infinity
    
    for (let i = 1; i < stocks.length; i++) {
        let next = -Infinity
        if (i < stocks.length-1) next = stocks[i+1]
        max = Math.max(max, stocks[i])
        min = Math.min(min, stocks[i])
        if (next < max || next === -Infinity) {
            allProfit = Math.max(allProfit, allProfit + max - min)
            max = next
            min = next
        }
    } 
    return allProfit
}
console.log(maxProfit([7,1,5,3,6,4])) // = 7
