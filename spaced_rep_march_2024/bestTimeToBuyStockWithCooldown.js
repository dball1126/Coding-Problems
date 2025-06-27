/**
 * @param {number[]} prices
 * @return {number}
 */
// Top-Down Dynamic Programming
// Time and Space: O(n)
var maxProfit = function(prices) {
    let n = prices.length
    const memo = [...new Array(n+1)].map(a => [...new Array(3)].fill(-Infinity))

    const dp = (i, c) => { // c is 0 for buy, 1 for sell
        if (i >= n || c >= 2) return 0
        if (memo[i][c] !== -Infinity) return memo[i][c]
        memo[i][c] = 0
        if (c === 0) {
            const v1 =  dp(i+1, 1)  + (-prices[i])
            const v2 = dp(i+1, c)
            return memo[i][c] = Math.max(v1, v2)
        } else {
            const v1 = prices[i] + dp(i+2, 0)
            const v2 = dp(i+1, c)
            return memo[i][c] = Math.max(v1, v2)
        }   
    }
    dp(0,0)
    return Math.max(memo[0][0])
};

// Bottom-Up Dynamic Programming
// Time and Space: O(n)
var maxProfit = function(prices) {
    let n = prices.length
    const memo = [...new Array(n+2)].map(a => [...new Array(4)].fill(0))

    for (let i = n-1; i >= 0; i--) {
        for(let c = 1; c >= 0;  c--) {
            if (c === 1) {
                memo[i][c] = Math.max(prices[i] + memo[i+2][0], memo[i+1][c])
            } else {
                memo[i][c] = Math.max(memo[i+1][1] + (-prices[i]), memo[i+1][c])
            }
        }
    }
    return memo[0][0]
}
console.log(maxProfit( prices = [1,2,3,0,2])) // = 3

