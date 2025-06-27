var solveNQueens = function(n) {
    let diags = new Set(), aDiags = new Set(), cols = new Set(), rows = new Set()
    let board = [...new Array(n)].map(a => [...new Array(n)].fill('.')), result = [];
    const backtrack = (r, c, count) => {
        if (count === n) {
            let copy = []
            for (let i = 0; i < n; i++) {let str = ""
                for (let j = 0; j < n; j++) {str += board[i][j]}
                copy.push(str)}
            return result.push(copy)
        }
        if (r < 0 || c < 0 || r >= n || c >= n) return;
        for (let i = r; i < n; i++) {
            for (let j = c; j < n; j++) {
                if (!rows.has(i) && !cols.has(j) &&
                    !diags.has(i - j) && !aDiags.has(i+ j) && board[i][j] !== "Q") {
                    rows.add(i); cols.add(j); board[i][j] = "Q";
                    diags.add(i - j); aDiags.add(i + j)
                    backtrack(i+1, 0, count+1)
                    rows.delete(i); cols.delete(j);
                    diags.delete(i - j); aDiags.delete(i + j)
                    board[i][j] = '.'
                }
            }
        }
    }
    backtrack(0, 0, 0)
    return result
};

console.log(solveNQueens(4))