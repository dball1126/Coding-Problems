/**
 * @param {number[][]} matrix
 */
// 2D prefix Sum / Dynamic Programming / Matrix Traversal
// Time and Space: O(n * m)...for rows * columns
var NumMatrix = function(matrix) {
    const n = matrix.length, m = matrix[0].length;
    this.dp = [[...new Array(m+1)].fill(0)]

    for (let i = 0; i < n; i++) {
        this.dp.push([0, ...matrix[i]])
    }


    for (let r = 1; r < n+1; r++) {
        for (let c = 1; c < m+1; c++) {
            this.dp[r][c] = (this.dp[r][c] + (this.dp[r-1][c] + this.dp[r][c-1])) - this.dp[r-1][c-1]
        }
    }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    row1++; col1++; row2++; col2++
    return this.dp[row2][col2] - (this.dp[row2][col1-1] + this.dp[row1-1][col2]) + this.dp[row1-1][col1-1]
};


//   Your NumMatrix object will be instantiated and called as such:
  var obj = new NumMatrix([[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]])
  var param_1 = obj.sumRegion(1,1,2,2) // = 11

  
 