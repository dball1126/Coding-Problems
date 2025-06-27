/**
 * @param {number[][]} board
 * @return {number[][]}
 */
// Matrix Traversal, two-pointer
// Time: O(n^2 * m^2)...n for rows and m for columns
// Space: O(n * m)
var candyCrush = function(board) {
    let crush = true, n = board.length
    const addKey = (r, c, map) => {
        let k = r + ":" + c
        map.set(k, [r, c])}
    const getKey = (r, c, map) => map.get(r + ":" + c)
    while (crush) {
        let items = new Map(); crush = false;
        
        for (let r = 0; r < n; r++) {
            let m = board[r].length
            for (let c = 0; c < m; c++) {
                let v = board[r][c]
                if (v === 0) continue;
                if (c-1 >= 0 && c+1 < m) { // Horizontal
                    if (v === board[r][c-1] && v === board[r][c+1]) {
                        addKey(r, c, items); addKey(r, c-1, items);  addKey(r, c+1, items); crush = true;}
                }
                if (r-1 >= 0 && r+1 < n) { // vertical
                    if (v === board[r-1][c] && v === board[r+1][c]) {
                        addKey(r, c, items); addKey(r-1, c, items); addKey(r+1, c, items); crush = true;
                    }}}
        }
        if (crush) {
            let cols = new Set()
            for (let i = 0; i < n; i++) {
                for (let j = 0; j < board[i].length; j++) {
                    const key = getKey(i, j, items)
                    if (key !== undefined) {
                        board[i][j] = 0; cols.add(j)}
                }
            }
            for (let k of Array.from(cols)) {
                let y1 = n-1, y2 = n-1 
                while (y1 >0 && y2 >= 0) { // two-pointer
                    while (y1 > 0 && board[y1][k] !== 0) {
                        y1--
                    }
                    y2 = y1
                    while (y2 >= 0 && board[y2][k] === 0) {
                        y2--
                    }
                    if (y1 > y2 && y2 >= 0) {
                        [board[y1][k], board[y2][k]] = [board[y2][k], board[y1][k]]
                        y1--
                        y2 = y1
                    }}}}
            }
    return board
};
console.log(candyCrush(board = [[110,5,112,113,114],
    [210,211,5,213,214],
    [310,311,3,313,314],
    [410,411,412,5,414],
    [5,1,512,3,3],
    [610,4,1,613,614],
    [710,1,2,713,714],
    [810,1,2,1,1],
    [1,1,2,2,2],
    [4,1,4,4,1014]]))









    // if (r-2 >= 0 ) { // up
    //     if (v === board[r-2][c] && v === board[r-1][c]) {
    //         items[r][c] = true; items[r-2][c] = true; items[r-1][c] = true;
    //         crush = true;
    //     }
    // }
    // if (r+2 < n) { // down
    //     if (v === board[r+2][c] && v === board[r+1][c]) {
    //         items[r][c] = true; items[r+2][c] = true; items[r+1][c] = true;
    //         crush = true;
    //     }
    // }

    // if (c-2 >= 0) { // left
    //     if (v === board[r][c-2] && v === board[r][c-1]) {
    //         items[r][c] = true; items[r][c-2] = true; items[r][c-1] = true;
    //         crush = true;
    //     }
    // }

    // if (c+2 < m) {
    //     if (v === board[r][c+2] && v === board[r][c+1]) {
    //         items[r][c] = true; items[r][c+2] = true; items[r][c+1] = true;
    //         crush = true;
    //     }
    // }