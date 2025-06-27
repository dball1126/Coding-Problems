/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
// Backtracking
// TIme: O((n*m)^4)
// Space: O((n*m) + k)...n for rows...m for cols...k for word length
var exist = function(board, word) {
    
    const dirs = [[-1,0], [1,0],[0,1],[0,-1]]
    const n = board.length, m = board[0].length
    const visit = board.map(a => a.map(v => false))
    const backtrack = (r, c, idx) => {
        if (r <0 || c < 0 || r >= n || c >= m || idx >= word.length || board[r][c] !== word[idx] || visit[r][c]) return false
        if (idx === word.length-1 && board[r][c] === word[idx]) return true;
        visit[r][c] = true
        for (let [x, y] of dirs) {
            if (backtrack(r+x, c+y, idx+1)) return true

        }
        visit[r][c] = false
        return false;
    }

    for (let r = 0; r < n; r++) {
        for (let c = 0; c < m; c++) {
            if (backtrack(r, c, 0)) return true;
        }
    }

    return false;
};
console.log(exist(board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"))