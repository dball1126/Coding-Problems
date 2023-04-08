/**
 * Create 2d array.
 * State variables: r for row   c for column
 * Base case: 1 if you reach the end........ 0 if out of bounds.
 * Recurrence Relation: if ([m][n] === [m.length-1][n-length-1]) return 1;
 * dp(m, n) = dp(m+1, n) + dp(m, n+1)
 * Time: O(m * n)
 * Space: O(m * n)
 */
var uniquePaths = function(m, n) {
    const memo = [...new Array(m+1)].map(a => [...new Array(n+1)].fill(-Infinity))

    const dp = (r, c) => {
        if (r >= m || c >= n) return 0;
        if (r === m-1 && c === n-1) return 1;
        if (memo[r][c] !== -Infinity) return memo[r][c];

        return memo[r][c] = dp(r+1, c) + dp(r, c+1)
    }
    return dp(0, 0)
};

console.log(uniquePaths(m = 3, n = 7))