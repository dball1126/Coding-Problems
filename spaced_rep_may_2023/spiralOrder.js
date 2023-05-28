// Matrix Traversal
// Time: O(r * c)....rows * columns
// Space: O(1)...not counting output array
var spiralOrder = function(matrix) {
    let result = [], n = matrix.length, m = matrix[0].length
    let half = Math.floor(n / 2)
    for (let i = 0; i <= half; i++) {
        let r = i, c = i
        if (matrix[r][c] === '' || matrix[r][c] === undefined) break;
        result.push(matrix[r][c])
        matrix[r][c] = ''
        // right
        while (c+1 < m && matrix[r][c+1] !== '' && matrix[r][c+1] !== undefined) {
            c++;
            result.push(matrix[r][c])
            matrix[r][c] = ''
        }
        // down
        while (r+1 < n && matrix[r+1][c] !== '' && matrix[r+1][c] !== undefined) {
            r++;
            result.push(matrix[r][c])
            matrix[r][c] = ''
        }
        // left
        while (c-1 >= 0 && matrix[r][c-1] !== '' && matrix[r][c-1] !== undefined) {
            c--;
            result.push(matrix[r][c])
            matrix[r][c] = ''
        }
        // up
        while (r-1 >= 0 && matrix[r-1][c] !== '' && matrix[r-1][c] !== undefined) {
            r--;
            result.push(matrix[r][c])
            matrix[r][c] = ''
        }
    }
    return result
};

console.log(spiralOrder(matrix = [[3],[2]]))