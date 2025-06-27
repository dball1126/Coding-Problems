/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// Top-down Dynamic Programming
// Time and Space: O(nm * n)
var uniquePaths = function(m, n) {
    let memo = [...new Array(m)].map(a => [...new Array(n)])

    const dp = (r, c) => {
        if (r >= m || c >= n) return 0;
        if (r === m-1 && c === n - 1) return 1;
        if (memo[r][c] !== undefined) return memo[r][c]

        let v1 = dp(r+1, c), v2 = dp(r, c+1)
        return memo[r][c] = v1 + v2
    }
    return dp(0,0)
};
// Bottom-up Dynamic Programming
// Time and Space: O(nm * n)
var uniquePaths = function(m, n) {
    let memo = [...new Array(m+1)].map(a => [...new Array(n+1)].fill(0))

    for (let r = m-1; r >= 0; r--) {
        for (let c = n-1; c >= 0; c--) {

            if (r === m-1 && c === n-1) {
                memo[r][c] = 1;
            } else {
                memo[r][c] = memo[r+1][c] + memo[r][c+1]
            }

        }
    }
    return memo[0][0]
}
console.log(uniquePaths(m = 3, n = 2)) // =  3

