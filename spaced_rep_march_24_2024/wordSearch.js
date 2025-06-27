/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
// Time: O(n * m * 3^w)...n for rows...m for cols...w for length of word and 3 for the dirs
// Space: O(n * m)...for visited   O(w)...for height of recursion tree
var exist = function(board, word) {
    let n = board.length, m = board[0].length
    let wL = word.length
    const dirs = [[1,0],[-1,0],[0,1],[0,-1]]
    let pathFound = false;

    const wordSearch = (r, c, i, visited) => {
        if (pathFound) return true;
        if (i === wL-1 && board[r][c] === word[i]) return true;

        visited[r][c] = true;
        for (let [x, y] of dirs) { // 4

            if ((r+x) < 0 || (c +y) < 0 || (r+x) >= n || (c+y)  >= m) continue;
            if (board[r+x][c+y] !== word[i+1] || visited[r+x][c+y]) continue;

            visited[r+x][c+y] = true;
            let result = wordSearch(r+x, c+y, i+1, visited)
            visited[r+x][c+y] = false;
            if (result) return pathFound = true;
        }
        return false;
    }

    for (let r = 0; r < n; r++) { 
        for (let c = 0; c < m; c++) {
            if (board[r][c] === word[0]) {
                const visited = [...new Array(n)].map(a => [...new Array(m)].fill(false))
                let result = wordSearch(r, c, 0, visited)
                if (result) return true;
            }
        }
    }
    return false;
};
console.log(exist( 
    [["A","A","A","A","A","A"],["A","A","A","A","A","A"],["A","A","A","A","A","A"],["A","A","A","A","A","A"],["A","A","A","A","A","A"],["A","A","A","A","A","A"]]
, word = "AAAAAAAAAAAAAAB"))
/**
 * [["A","B","C","E"],
 *  ["S","F","C","S"],
 *  ["A","D","E","E"]], word = "ABCCED"
 *  [ 0 0 0 visited[:true]]
 */