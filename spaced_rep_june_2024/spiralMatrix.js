/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const result = []
    let queue = [[0,0, "R"]], n = matrix.length, m = matrix[0].length

    while (queue.length) {
        let [r, c, v] = queue.shift();
        if (r < 0 || c < 0 || r >= n || c >= m) break
        if (matrix[r][c] === "-") break;
        result.push(matrix[r][c])
        matrix[r][c] = "-"
        if (v === "R") {
            while (c+1 < m && matrix[r][c+1] !== "-") {
                c++;
                result.push(matrix[r][c])
                matrix[r][c] = "-"
            }
            queue.push([r+1, c, "D"])
        } else if (v === "L") {
            while (c-1 >= 0 && matrix[r][c-1] !== "-") {
                c--;
                result.push(matrix[r][c])
                matrix[r][c] = "-";
            }
            queue.push([r-1, c, "U"])

        } else if (v === "D") {
            while (r+1 < n && matrix[r+1][c] !== "-") {
                r++;
                result.push(matrix[r][c])
                matrix[r][c] = "-";
            }
            queue.push([r, c-1, "L"])

        } else if (v === "U") {
            while (r-1 >= 0 && matrix[r-1][c] !== "-") {
                r--;
                result.push(matrix[r][c])
                matrix[r][c] = "-"
            }
            queue.push([r, c+1, "R"])
        }

    }
    return result
};
console.log(spiralOrder( matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]))