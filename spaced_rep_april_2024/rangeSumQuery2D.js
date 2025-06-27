// Dynamic Programming
// 2-D Prefix Sum 
// Time and Space: O(n^2)
var NumMatrix = function(matrix) {
    let n = matrix.length, m = matrix[0].length
    this.matrix = [...new Array(n+1)].map(a => [...new Array(m+1)].fill(0))
    for (let r = 1; r <= n; r++) {
        for (let c = 1; c <= m; c++) {

            this.matrix[r][c] = matrix[r-1][c-1] + 
                                this.matrix[r-1][c] +
                                this.matrix[r][c-1] -
                                this.matrix[r-1][c-1]
        }
    }
};
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    row1++, col1++, row2++, col2++

    return this.matrix[row2][col2] - (
        this.matrix[row2][col1 - 1] +
        this.matrix[row1-1][col2] 
    ) + this.matrix[row1-1][col1-1]
};
var obj = new NumMatrix([[1,2,3],
                         [4,5,6],
                         [7,8,9]])
//    [[ 0, 0, 0, 0 ], 
//     [ 0, 1, 3, 6 ], 
//     [ 0, 5, 12, 21 ], 
//     [ 0, 12, 27, 45 ]]
console.log(obj.sumRegion(1,1,2,2)) // 28

