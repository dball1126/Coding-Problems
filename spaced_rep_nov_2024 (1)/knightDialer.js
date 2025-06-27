/**
 * @param {number} n
 * @return {number}
 */
// Top-Down Dynamic Programming.
// Time and Space: O(N)...rows and cols are constant at 5 and 4
var knightDialer = function(n) {
    const dirs = [[-2,1],[2,1],[-2,-1],[2,-1],[1,-2],[1,2],[-1,-2],[-1,2]]
    const mod = (10**9) + 7
    const memo = [...new Array(n+1)].map(a => 
                [...new Array(5)].map(a => 
                [...new Array(4)]))
    let total = 0;
    const dp = (r, c, num) => {
        if ( r < 0 || c < 0 || r >= 4 || c >= 3 || (r === 3 && c === 0) || (r === 3 && c === 2)) {
            return 0
        } else if (num <= 0) {
            return 1;
        } else if (memo[num][r][c] !== undefined) {
            return memo[num][r][c]
        }
        let ways = 0;

        for (let [rr, cc] of dirs) {
            ways += dp(r + rr, c + cc, num -1)
            ways %= mod
        }
        return memo[num][r][c] = ways
    }
    for (let i = 0; i < 4; i++) { // Loop outside of recursive call technique.
        for (let j = 0; j < 3; j++) {
            total += dp(i, j, n-1)
            total %= mod;
        }
    }
    return total
};
console.log(knightDialer(2)) // = 20
// = [04, 06, 16, 18, 27, 29, 34, 38, 40, 43, 49, 60, 61, 67, 72, 76, 81, 83, 92, 94]


