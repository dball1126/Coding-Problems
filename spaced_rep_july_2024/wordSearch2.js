/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    let n = board.length, m = board[0].length, len = words.length
    const visited = board.map(a => a.map(v => false))
    const dirs = [[1,0], [-1,0], [0,1], [0,-1]]
    let result = new Set()
    
    const backtrack = (r, c, word, idx) => {
        if (r < 0 || c < 0 || r >= n || c >= m || visited[r][c] || idx >= word.length || board[r][c] !== word[idx]) {
            return false;
        }
        if (idx === word.length-1) {
            return result.add(word)
        }
        visited[r][c] = true

        for (let [x, y] of dirs) {
            let rx = x + r, cy = c + y

            if (backtrack(rx, cy, word, idx+1)) {
                return visited[r][c] = false
            }
        }
        visited[r][c] = false;
        return false
    }

    for (let r = 0; r < n; r++) {
        for (let c = 0; c < m; c++) {
            let v = board[r][c]
            for (let wrd of words) {

                if (v === wrd[0] && !result.has(wrd)) {
                    backtrack(r, c, wrd, 0)
                }
            }
        }
    }

    return Array.from(result)
};
console.log(findWords( board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]))