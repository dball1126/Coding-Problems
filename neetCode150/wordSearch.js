// Backtracking
// Time: O((r * c)^3 * m )...for row * columns...3 directions * word length
// Space: O((r * c) * m)
var exist = function(board, word) {
    let found = false, m = board.length, n = board[0].length
    let dirs = [[1,0],[0, -1],[0, 1], [-1, 0]]

    const backtrack = (r, c, i, visited) => {
        if (found || i >= word.length) return false;
        if (r < 0 || c < 0 || r >= m || c >= n || visited.has(r * n + c)) return false;
        if (i === word.length-1 && board[r][c] === word[i]) return found = true;
        visited.add(r * n + c)

        for (let [x, y]  of dirs) {
            let r1 = r + x, c1 = c + y
            if (found) return true;
            if (r1 >= 0 && c1 >= 0 && r1 < m && c1 < n && board[r1][c1] === word[i+1] && !visited.has(r1 * n + c1)) {
                backtrack(r1, c1, i+1, visited)
                visited.delete(r1 * n + c1)
            }
        }
    }
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (board[r][c] === word[0]) {
                if (backtrack(r, c, 0, new Set())) return found;
            }
        }
    }
    return found;
};
console.log(exist([["a","a"],["a","a"]], "aaaa")) // = true
