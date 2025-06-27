// Dynamic Programming
// Time: O(n)
// Space: O(n + n + n) = O(n)
var longestValidParentheses = function(s) {
    let n = s.length, open = 0, close = 0, max = 0;
    const dp = [...new Array(n+1)]
        .map(a => [...new Array(n+1)]
        .map(a => [...new Array(n+1)].fill(0))) 

    for (let i = n-1; i >= 0; i--) {
        let prevOpen = open, prevClose = close
        s[i] === "(" ? open++ : close++

        if (open === close || close > open) {
            dp[i][open][close] = Math.max((open*2) - dp[i+1][prevOpen][prevClose],dp[i+1][prevOpen][prevClose])
        } else if (open > close) {
            dp[i][open][close] = dp[i+1][prevOpen][prevClose]
            open = 0; close = 0
        }
        max = Math.max(max, dp[i][open][close])
    }
    return max
};

console.log(longestValidParentheses("())())"))//=4