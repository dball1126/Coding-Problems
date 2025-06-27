

// Backtracking
// Time: O((r*c) * 3^w)...r for rows, c for cols, w for word.length
//Space: O(w + (r*c))...for word length
var exist = function(board, word) {
    let valid = false, visited = new Set(), dirs = [[1,0],[-1,0],[0,1],[0,-1]];
    let n = board.length, m = board[0].length
    const backtrack = (rX, cY, curr) => {
        let val = curr + board[rX][cY]
        if (valid || val.length === word.length && val === word) {
            return valid = true;
        }
        if (val[val.length-1] === word[val.length-1]) {
            dirs.forEach(([x, y]) => {
                const r = rX + x, c = cY + y
                let key = r + "" + c
                if (!visited.has(key)) {
                    if (r >= 0 && c >= 0 && r < n && c < m) {
                        visited.add(rX + "" + cY)
                        backtrack(r, c, val)
                        visited.delete(rX + "" + cY)
                    }
                }
            })
        }
    }
    for (let r = 0; r < n; r++) {
        for (let c = 0; c < m; c++) {
            backtrack(r, c, "")
            if (valid) break
        }
    }
    return valid;
};
console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"))//=true


// board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"