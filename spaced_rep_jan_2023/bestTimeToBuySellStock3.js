// Time: O(n), Space: O(1)
const maxProfit = (stocks) => {
    let min = stocks[0], max = -Infinity
    let trans1 = 0, trans2 = 0
    let dp = new Array(stocks.length).fill(0)
    for (let i = 1; i < stocks.length; i++) {
        let next = -Infinity
        if (i < stocks.length-1) next = stocks[i+1]
        dp[i] = max - min

        max = Math.max(max, stocks[i])
        min = Math.min(min, stocks[i])
        if (next < max || next === -Infinity) {
            dp[i] = Math.max(dp[i], max - min)
            if (dp[i] > trans1) {
                if (trans1 > trans2) trans2 = trans1
                trans1 = dp[i]
            } else if (dp[i] > trans2) {
                if (trans2 > trans1) trans1 = trans2
                trans2 = dp[i]
            }
            max = next
            min = next
        } else {

        }
    } 
    console.log(dp)
    return trans1 + trans2
}

console.log(maxProfit( prices = [1,2,4,2,5,7,2,4,9,0]))