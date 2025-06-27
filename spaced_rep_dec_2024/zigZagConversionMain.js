/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows <= 1) return s
    let grid = [...new Array(numRows + 1)].map(a =>
        [...new Array(s.length+1)].fill(""));
    let result = "", maxColLen = -Infinity;
    let d = 'd', c = 0, r = 0, i = 0;
    for (let i = 0; i < numRows; i++) {
        maxColLen = Math.max(maxColLen, grid[i].length);
    }

    while (r < numRows && c < maxColLen && i < s.length) {
        if (d === 'd') {
            if (grid[r]) grid[r][c] = s[i];

            while (r+1 < numRows) {
                grid[r][c] = s[i];
                r++; i++;
            }
            d = 'diag'
        } else {
            if (grid[r]) grid[r][c] = s[i];

            while (r-1 >= 0 && c+1 < maxColLen && i < s.length) {
                grid[r][c] = s[i];
                i++; r--; c++;
            } 
            d = 'd'
        }
        if (r === numRows -1 && c === maxColLen-1) break;
    }
    for (let r = 0; r < numRows; r++) {
        for (let c = 0; c < maxColLen; c++) {
            result += grid[r][c] || "";
        }
    }
    return result;
};
console.log(convert( s = "PAYPALISHIRING", numRows = 4))