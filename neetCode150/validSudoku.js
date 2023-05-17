
// Time: O(1) + r + r * c = O(r * c)
// Space: ((r * c) * 3 ) + O(1) = O(r * c)
var isValidSudoku = function(board) {
    const rows = [], cols = [], squares = []

    for (let r = 0; r < board.length; r++) {
        rows[r] = new Set(); 
        cols[r] = new Set();
        squares[r] = new Set();
    }

    for (let r = 0; r < board.length; r++) {
        for (let c = 0; c < board.length; c++) {
            const v = board[r][c];
            if (v === ".") continue;

            const sqIdx = Math.floor(r / 3) * 3 + Math.floor(c / 3)

            if (rows[r].has(v)) return false;
            if (cols[c].has(v)) return false;
            if (squares[sqIdx].has(v)) return false;

            rows[r].add(v)
            cols[c].add(v)
            squares[sqIdx].add(v)
        }
    }

    return true;
};

console.log(isValidSudoku([["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]))