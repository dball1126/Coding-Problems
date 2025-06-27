/**
 * @param {number} n
 * @return {number}
 */
var soupServings = function(n) {
    
    let servs = [100,75,50,25]
    let dp = [...new Array(100)].fill(100) // A DP
    
    dp.push(...([...new Array(n+1)].fill(0)))

    for (let i = 100; i <= (100 + n); i++)  {
        let val = i
        let prob = 0
        for (let s of servs) {
            prob += dp[(val - s)]
        }
        prob = prob / 4
        dp[i] = prob
    }
    console.log(dp.slice(100))
};

console.log(soupServings(50))