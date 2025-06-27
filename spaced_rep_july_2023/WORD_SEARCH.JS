

var exist = function(board, word) {
    let n = board.length, m = board[0].length
    let visited = [...new Array(n)].map(a => [...new Array(m)].fill(false))
    let valid = false, dirs = [[1,0],[-1,0], [0, 1], [0,-1]]
    
    const backtrack = (rI, cI, curr) => {
        let e = curr.length-1
        if (valid || (curr.length === word.length && e > 0 && curr[e] === word[word.length-1])) {
            return valid = true;
        }
        for (let r = rI; r < n; r++) {
            for (let c = cI; c < m; c++) {
                let wrd = curr + board[r][c]

                if (wrd[wrd.length-1] === word[wrd.length-1]) {
                    if (wrd.length-1 === word.length-1) return valid = true;
                    if (visited[r][c]) return;
                    visited[r][c] = true
                    
                    dirs.forEach(([x, y]) => {
                        let rX = r + x, cY = c + y
                        if (rX >= 0 && cY >= 0 && rX < n && cY < m && !visited[rX][cY]) {
                            let maybe = wrd + board[rX][cY]
                            if (maybe[maybe.length-1] === word[maybe.length-1]) {
                                backtrack(rX, cY, wrd)
                            }
                        }
                    })
                    visited[r][c] = false
                }
            }
        }
    }
    backtrack(0,0,"")
    return valid
};
console.log(exist([["a","b"]], "ba"))
