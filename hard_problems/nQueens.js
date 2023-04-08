// Time: O(!n), Space: O(n*2)
var solveNQueens = function(n) {
    let positions = [], diagnols = new Set(), antiDiagnols = new Set(), cols = new Set()
    const backtrack = (row, col, grid) => {
        if (grid.length === n) {
            copy = grid.map(a => a.join(""))
            return positions.push(copy)
        }
        if (row >= n) return;
        for (let r = row; r < n; r++) {
            let arr = new Array(n).fill('.')
            for (let c = col; c < n; c++) {
                if (cols.has(c) || diagnols.has(r - c) || antiDiagnols.has(r + c)) {
                    continue;
                }
                diagnols.add(r - c); antiDiagnols.add(r + c); cols.add(c)
                arr[c] = 'Q'; grid.push(arr)
                backtrack(r+1, 0, grid)
                diagnols.delete(r - c); antiDiagnols.delete(r + c); cols.delete(c)
                grid.pop(); arr[c] = '.'
            }
            break;
        }
    }
    backtrack(0, 0, [])
    return positions
};console.log(solveNQueens(4)) // = [[ '.Q..', '...Q', 'Q...', '..Q.' ],[ '..Q.', 'Q...', '...Q', '.Q..' ]]

