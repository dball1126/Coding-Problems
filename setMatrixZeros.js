// Matrix Traversal
// Time & Space: O(n * m)
var setZeroes = function(matrix) {
    let n = matrix.length, m = matrix[0].length;
 
    for (let c = 0; c < n; c++) {
        m = Math.max(m, )
        for (let r = 0; r < matrix[c].length; r++) {
            if (matrix[c][r] === 0) visited[c][r] = false;
        }
    }
    for (let c = 0; c < n; c++) {
        for (let r = 0; r < matrix[c].length; r++) {
            if (visited[c][r] || visited[c][r] === undefined) continue;
            let colChecked = false, rowChecked = false;
            if (c !== 0 && matrix[0][r] === 0) colChecked = true;
            if (r !== 0 && matrix[c][0] === 0) rowChecked = true;

            if (!colChecked) {
                let tmp1 = c, tmp2 = c
                while (tmp1 >= 0) {
                    matrix[tmp1][r] = 0
                    tmp1--
                }
                while (tmp2 < n) {
                    matrix[tmp2][r] = 0
                    tmp2++
                }
            }
            if (!rowChecked) {
                let tmp1 = r, tmp2 = r
                while (tmp1 >= 0) {
                    matrix[c][tmp1] = 0
                    tmp1--
                }
                while (tmp2 < matrix[c].length) {
                    matrix[c][tmp2] = 0
                    tmp2++
                }
            }
            visited[0][r] = true; visited[c][0] = true
        }
    }
    return matrix
};
console.log(setZeroes([[1,2,3,4],
                       [5,0,7,8],
                       [0,10,11,12],
                       [13,14,15,0]]))//=[ [ 0, 0, 0, 0 ], [ 0, 4, 5, 0 ], [ 0, 3, 1, 0 ] ]