/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
    let result = [], n = mat.length, m = mat[0].length
    let stack = [[0, 0, "up"]]

    while (stack.length) {
        let [r, c, v] = stack.pop()

        result.push(mat[r][c])
        if (result.length === n * m) return result
        if (v === "up") {
            while (r > 0 && c < m-1) {
                r--, c++
                result.push(mat[r][c])
            }
            if (c + 1 < m) {
                c++
            } else {
                r++
            }
            v = "dwn"
        } else {
            while (r < n-1 && c > 0) {
                r++; c--
                result.push(mat[r][c])
            }
            if (r+1 < n) {
                r++
            } else {
                c++
            }
            v = "up"
        }

        stack.push([r, c, v])
    }
    return result;
};
console.log(findDiagonalOrder( mat = [[1,2],[3,4]]))