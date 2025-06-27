/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// Bottom-Up Dynamic Programming
// Time: O(m * m)...m for # of rows and n for # of columns
// Space: O(n)
var uniquePaths = function(m, n) {
    let row = [...new Array(n)].fill(0)
    row[0] = 1
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (r === 0 && c === 0) continue;
            let prevUp = row[c], prevLeft = 0
            if (c-1 >= 0) prevLeft = row[c-1]
            row[c] = prevLeft + prevUp
        }
    }
    return row[n-1]
};
console.log(uniquePaths(3, 2)) // = 3



