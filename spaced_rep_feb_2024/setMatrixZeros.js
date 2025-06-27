// Matrix Traversal
// Time: O(n * m)
// Space: O(n + m)
var setZeroes = function(matrix) {
    let n = matrix.length, m = matrix[0].length, stack = [], rows = [], cols = []
 
    for (let r = 0; r < n; r++) {
        m = Math.max(m, matrix[r].length)
        for (let c = 0; c < matrix[r].length; c++) {
            if (matrix[r][c] === 0) stack.push([r, c])
        }
    }
    rows = new Array(n).fill(false), cols = new Array(m).fill(false);

    while (stack.length) {
        let [r, c] = stack.shift();
        
        if (rows[r] !== true) {
            let rL = r-1, rR = r+1;
            while (matrix[rL]) {
                matrix[rL][c] = 0
                rL--
            }
            while (matrix[rR]) {
                matrix[rR][c] = 0
                rR++
            }
        }
        if (cols[c] !== true) {
            let cL = c-1, cR = c+1
            while (matrix[r][cL] !== undefined) {
                matrix[r][cL] = 0
                cL--
            }
            while (matrix[r][cR] !== undefined) {
                matrix[r][cR] = 0
                cR++
            }
        }
        rows[r] = true; cols[c] = true;
    }
    return matrix
};
console.log(setZeroes(atrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]))
//=[ [ 0, 0, 0, 0 ], [ 0, 4, 5, 0 ], [ 0, 3, 1, 0 ] ]

