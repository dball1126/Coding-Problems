/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    let rows = new Map(), 
        cols = new Map(), 
        visited = [...new Array(9)].map(a=> [...new Array(9)].fill(false))
    for (let i = 0; i < 9; i++) {
        rows.set(i, 0);
        cols.set(i, 0);
    }
    const hasBit = (n, mask) => (mask & n) >= 1;
    const setBit = (n, mask) => mask | n;
    const unsetBit = (n, mask) => mask & ~n; // Unset bit function

    const dirs = [[-1,0],[1,0],[0,-1],[0,1]]
    let count = 0
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            if (board[r][c] === '.') {
                count++
                continue;
            }
            let v = (1 << parseInt(board[r][c]));
            rows.set(r, setBit(rows.get(r), v));
            cols.set(c, setBit(cols.get(c), v));
            visited[r][c] = true;
        }
    }
    let result;
    const backtrack = (row, col) => {
        if (row < 0 || col < 0 || row > 9 || col > 9) return;
        // console.log(board)
        for (let r = row; r < 9; r++) {
            for (let c = col; c < 9; c++) {
                if (board[r][c] === '.') {
                    
                    for (let num = 1; num <= 9; num++) {
                        let v = (1 << parseInt(num));
                        if (!hasBit(v,rows.get(r)) && !hasBit(v, cols.get(c))) {
                            board[r][c] = num + ""
                            count--
                            if (!count) {
                                return result = board.map(a => a.map(v => v));
                            }
                            rows.set(r, setBit(rows.get(r), v));
                            cols.set(c, setBit(cols.get(c), v));
        console.log("r " + r + " c " + c + " count " + count)
                            if (c === 8) {
                                backtrack(r+1, 0)
 
                            } else {
                                backtrack(r, c+1)
                            }

                           board[r][c] = '.'
                           count++
                           rows.set(r, unsetBit(rows.get(r), v));
                            cols.set(c, unsetBit(cols.get(c), v));

                        }
                    }
                }
            }
        }
    }
    backtrack(0,0)
    return result
};
console.log(solveSudoku(board = [["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]))