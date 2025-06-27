/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    const dirs = [[1,0],[-1,1]], n = s.length
    let grid = [...new Array(numRows)].map(a => [...new Array(n)].fill(""))

    let r = 0, c = 0, i = 0
    while (r < numRows && c < n) {
        grid[r][c] = s[i]
        while (r+1 < numRows) {
            i++; r++
            // console.log("R " + r + "C " + c)


            grid[r][c] = s[i]
        }
        i++
        while (r -1 >= 0 &&  c+1 < n) {
            r--; c++; 
            grid[r][c] = s[i]
            i++
        }
        // console.log("R " + r + "C " + c)
        grid[r][c] = s[i]
        if ( r ===  numRows-1 && c === n-1) break
    }

    return grid[0][2]
};
console.log(convert(s = "PAYPALISHIRING", numRows = 3))