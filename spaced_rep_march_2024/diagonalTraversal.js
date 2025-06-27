/**
 * @param {number[][]} mat
 * @return {number[]}
 */
// Matrix Traversal
// Time: O(n * m)...rows * cols
// Space: O(1)...not counting output array
var findDiagonalOrder = function(mat) {
    if (!mat.length) return []
    let result = [], r = 0, c = 0, n = mat.length
    let m = mat[n-1].length, dir = "U_R"
    while ( r < n || c < m) {
        let x = -1, y = 1
        if (dir !== "U_R") {
            x = 1, y = -1
        }
        result.push(mat[r][c])
        if (r === n-1 && c === m-1) return result
        while ((r+x) >= 0 && (r+x) < n && (c+y) >= 0 && (c+y) < m) {
            r += x; c += y;
            result.push(mat[r][c])
        }
        if (dir === "U_R") {
            (c+1) < m ? c += 1 : r += 1
        } else {
            (r+1) < n ? r += 1 : c += 1
        }
        dir = (dir === "U_R") ? "D_L" : "U_R"
    }
    return result;
};
console.log(findDiagonalOrder(mat = [[1,2,3],[4,5,6],[7,8,9]]))
// = [1, 2, 4, 7, 5, 3, 6, 8, 9]