// Base Case: 0 if out of boudns, 1 as default
// State Var: r, c for indexes of matrix
// Recurrence Relation:
// dp(r, c):  val = matrix[r][c]
//      for dir of dirs
//          if dir > val
//              val = Math.max(val, dp( dir ) + 1)
//
//      return val
//
// 2D Top-Down Dynamic Programming
// Time & Space: O(r * c) ...row * columns
var longestIncreasingPath = function(matrix) {
    const n = matrix.length, m = matrix[0].length
    const memo = [...new Array(n)].map(a => [...new Array(m)])
    const dirs = [[1,0],[-1,0],[0,1],[0,-1]]
    let result = 1;

    const dp = (r, c) => {
        if ( r < 0 || c < 0 || r >= n || c >= m) return 0
        if (memo[r][c]) return memo[r][c]
        let memoVal = 1;
        let val = matrix[r][c]
        for (let [x, y] of dirs) {
            let r1 = r + x, c1 = c + y
            if (r1 >= 0 && c1 >= 0 && r1 < n && c1 < m && matrix[r1][c1] > val) {
                memoVal = Math.max(memoVal, dp(r1, c1) + 1)
            }
        }
        return memo[r][c] = memoVal
    }
    for (let r = 0; r < n; r++) {
        for (let c = 0; c < m; c++) {
            result = Math.max(result, dp(r, c))
        }
    }
    return result;
};

console.log(longestIncreasingPath( [[10,9,4],[11,6,8],[12,1,1]])) // 6
