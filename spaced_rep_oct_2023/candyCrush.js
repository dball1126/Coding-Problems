
// Matrix Traversal
// Time and Space: O((r * c) * 3) = O(r* c) for rows * columns
var candyCrush = function(board) {
    let n = board.length, m = board[0].length
    
    const crush = () => {
        const idxs = new Map()
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (board[i][j] === 0) continue
                if (i + 2 < n) {
                    let v1 = board[i][j], v2 = board[i+1][j], v3 = board[i+2][j]
                    if (v1 === v2 && v1 === v3) {
                        idxs.set(i + "" + j, [i, j])
                        idxs.set(i+1 + "" + j, [i+1, j])
                        idxs.set(i+2 + "" + j, [i+2, j])
                    }
                }
                if (j + 2 < m) {
                    let v1 = board[i][j], v2 = board[i][j+1], v3 = board[i][j+2]
                    if (v1 === v2 && v1 === v3) {
                        idxs.set(i + "" + j, [i, j])
                        idxs.set(i + "" + j+1, [i, j+1])
                        idxs.set(i + "" + j+2, [i, j+2])
                    }
                }
            }
        }
        for (let [k, v] of idxs) {
            let [r, c] = v
            board[r][c] = 0
        }

        for(let j = 0; j < m; j++) {
            let s = n-1, e = 0, flag = true;
            while (flag) {
                while (s >= 0) {
                    if (board[s][j] === 0) break;
                    s--
                }
                e = s
                while (e >= 0) {
                    if (board[e][j] !== 0) break;
                    e--
                }
                if (s < 0 || e < 0) flag = false;
                while (e >= 0 && s >= 0 && board[s][j] === 0 && board[e][j] !== 0) {
                    [board[e][j], board[s][j]] = [board[s][j], board[e][j]]
                    e--; s--;
                }
            }

        }
        return idxs.size
    }

    while (true) {
        if (!crush()) break;
    }
    return board;
};


console.log(candyCrush([[1,1,2],[4,4,4],[4,4,4],[4,4,4],[6,7,8],[4,4,4],[4,4,4],[4,4,4]]))