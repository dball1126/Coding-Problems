// Time and Space: O(k * (n + m)), k for indicies and n/m for rows cols
var oddCells = function(m, n, indices) {
    const matrix = [...new Array(m)].map(a => [...new Array(n)].fill(0))
    let oddCells = 0
    const fillRow = (row) => {
        matrix[row].forEach((v, i) => matrix[row][i]++)
    }
    const fillCol = (row, col) => {
        let down = row+1, up = row-1
        matrix[row][col]++
        while (up >= 0) {
            matrix[up][col]++
            up--
        }
        while (down <= m-1) {
            matrix[down][col]++
            down++
        }
    }
    for(let [row, col] of indices) {
        fillRow(row)
        fillCol(row, col)
    }
    for(r = 0; r  < m; r++) {
        for (let c = 0; c < n; c++) {
            if (matrix[r][c] & 1) oddCells++
        }
    }
    return oddCells
}; console.log(oddCells(m = 2, n = 3, indices = [[0,0]]))