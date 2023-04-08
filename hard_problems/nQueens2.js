// Backtracking
// Time: O(n!), Space: O(n)...n is the number of queens
var totalNQueens = function(n) {
    let validPositions = 0, diagnols = new Set(), antiDiagnols = new Set(), cols = new Set()
    const backtrack = (row, col, curr) => {
        if (curr === n) return validPositions += 1
        if (row >= n) return;
        for (let c = col; c < n; c++) {
            if (cols.has(c) || diagnols.has(row - c) || antiDiagnols.has(row + c)) {
                continue;
            }
            diagnols.add(row - c);
            antiDiagnols.add(row + c);
            cols.add(c)

            backtrack(row+1, 0, curr + 1)
            
            diagnols.delete(row - c);
            antiDiagnols.delete(row + c);
            cols.delete(c)
        }
    }
    backtrack(0, 0, 0)
    return validPositions
};
