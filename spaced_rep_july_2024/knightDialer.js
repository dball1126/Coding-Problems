/**
 * @param {number} n
 * @return {number}
 */
// Bottom-Up Dynamic Programming
// Time: O(n * r * c * d), n for our input, r for 8, c for 7, and d for 8
// Time: O(n)...since those other elements are constant
// SpacE: O(n)
var knightDialer = function(n) {
    if (n ===1 ) return 10
    const dirs = [[-2,1],[-2,-1],[2,-1],[2,1],[-1,2],[1,2],[-1,-2],[1,-2]]
    let max = 0, mod = 10**9+7
    const dp = [...new Array(n+1)].map(a =>
                [...new Array(8)].map(a => 
                [...new Array(7)].fill(0)))
    
    for (let i = 0; i <= n; i++) {
        for (let r = 2; r < dp[i].length-2; r++) {
            for (let c = 2; c < dp[i][r].length-2; c++) {

                if (r === dp[i].length-3) { // only the middle element of the last row
                    if (c === dp[i][r].length-4) dp[i][r][c] = 1
                } else {
                    dp[i][r][c] = 1
                }
            }
        }
        break
    }
    for (let i = 1; i < n; i++) {
        for (let r = 2; r < dp[i].length-2; r++) {
            for (let c = 2; c < dp[i][r].length-2; c++) {
                if (r === dp[i].length-3) { // only the middle element of the last row
                    if (c !== dp[i][r].length-4) continue;
                }
                let v = 0;
                for (let [x, y] of dirs) {
                    v = (v + dp[i-1][r+x][c+y]) % mod
                }
                dp[i][r][c] = v;
                if (i === n-1) max = (max + dp[i][r][c]) % mod
            }
        }
    }
    return max % mod
};
console.log(knightDialer(2)) // = 20

