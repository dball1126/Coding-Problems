/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
// Matrix Traversal
// Time: O(n * m)...rows * columns (4 dirs is constant)
// Space: O(1)
var spiralOrder = function(matrix) {
    const result = [], n = matrix.length, m = matrix[0].length
    const dirs = [[0,1],[1,0],[0,-1],[-1,0]] // right, down, left, up
    let c = 0, r = 0, flag = true;
    
    while (flag) {
        flag = false;
        if (matrix[c][r] !== Infinity) {
            result.push(matrix[c][r])
            matrix[c][r] = Infinity
        }
        for (let [y, x] of dirs) {

            while ((c+y) >= 0 && (r+x) >= 0 && (c+y) < n && (r+x) < m && matrix[(c+y)][(r+x)] !== Infinity) {
                result.push(matrix[(c+y)][(r+x)])
                matrix[(c+y)][(r+x)] = Infinity
                c = (c+y); r = (r+x); flag = true;
            }
        }
    }
    return result;
};
console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]))//[1, 2, 3, 6, 9, 8, 7, 4, 5 ]
