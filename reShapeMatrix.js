// Time and Space: O(r * c)
var matrixReshape = function(mat, r, c) {
    if (mat.length * mat[0].length !== r * c) return mat;
    let matrix = [...new Array(r)].map(a => [...new Array(c)])
    let vals = []
    mat.forEach(a => a.forEach(v => vals.push(v)))

    for(let row = 0; row < r; row++) {
        for (let col = 0; col < c; col++) {
            matrix[row][col] = vals.shift()
        }
    }
    return matrix;
};
