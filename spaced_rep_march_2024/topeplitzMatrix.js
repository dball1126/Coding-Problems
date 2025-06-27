/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
// Matrix Traversal
// Time: O(n * m)...rows * columns
// Space: O(1)
var isToeplitzMatrix = function(matrix) {
    if (!matrix.length) return true;
    const n = matrix.length, m = matrix[0].length

    for (let i = 0; i < m; i++) { // check rows
        let r = 0, c = i
        const v = matrix[r][c]
        while (r+1 < n && c+1 < m) {
            r++; c++;
            let v2 = matrix[r][c]
            if (v !== v2) return false;
        }
    }
    for (let i = 0; i < n; i++) { // check columns
        let r = i, c = 0
        const v = matrix[r][c]

        while (r+1 < n && c+1 < m) {
            r++; c++;
            let v2 = matrix[r][c]
            if (v !== v2) return false;
        }
    }
    return true;
};
console.log(isToeplitzMatrix(matrix = [[1,2],[2,2]])) // = false