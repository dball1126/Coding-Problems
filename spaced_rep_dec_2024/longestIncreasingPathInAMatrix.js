/**
 * @param {number[][]} matrix
 * @return {number}
 */
// Top-Down Dyanmic Programming
// Time & Space: O(n * m)...n for rows and m for columns
var longestIncreasingPath = function(matrix) {
    let rowLen = matrix.length, colLen = matrix[0].length, max = 0;
    const memo = [...new Array(rowLen + 1)].map(a => [...new Array(colLen + 1)])
    const dirs = [[-1,0],[1,0],[0,-1],[0,1]]

    const dp = (r, c) => {
        if (r < 0 || c < 0 || r >= rowLen || c >= colLen) return 0;
        if (memo[r][c] !== undefined) return memo[r][c]
        let v = 1;
        for (let [x, y] of dirs) { // go up/down/left/right
            let row = r + x, col = c + y
            if (row >= 0 && col >= 0 && row < rowLen && col < colLen
                && matrix[r][c] < matrix[row][col]) {
            
                v = Math.max(v, 1 + dp(row, col))
            }
        }
        return memo[r][c] = v; // memoization/caching
    }
    for (let r = 0; r < rowLen; r++) { // iterate over every cell
        for (let c = 0; c < colLen; c++) {
            max = Math.max(max, dp(r, c))
        }
    }
    return max
};
console.log(longestIncreasingPath( [[9,9,4],[6,6,8],[2,1,1]]))
// = 4     ( 1 -> 2 -> 6 -> 9)

