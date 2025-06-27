class Node {
    constructor() {
        this.isWord = false;
        this.keys = new Map()
    }
}
var findWords = function(board, words) {
    let trie = new Node()
    let dirs = [[-1,0],[1,0],[0,-1], [0,1]]
    let visited = board.map(a => [...a].fill(false))
    let n = board.length, m = board[0].length
    let result = new Set()

    for (let w of words) { // insert words
        const root = trie;
        for (let i = 0; i < w.length; i++) {
            let v = w[i]
            if (!root.keys.has(v)) {
                root.keys.set(v, new Node())
            }
            root = root.keys.get(v)
            if (i === w.length-1) root.isWord = true
        }
    }

    // search trie
    const search = (root, row, col, curr) => {
        if (root.isWord) result.add(wrd)
        if (!root.keys.has(wrd[i])) return false;
        root = root.keys.get(wrd[i])
        visited[row][col] = true
        for (let [r, c] of dirs) {
            let rx = row + r, cy = col + row
            if (rx > 0 && cy > 0 && rx < n && cy < m) {
                let c = board[x1][y1]
                if (visited[rx][cy] === false && root.keys.has(c)) {
                    visited[rx][cy] = true
                    search(root.keys.get(c), rx, cy, visited, curr + c)
                    visited[rx][cy] = false
                }
            }
        }
    }

    
    for (let r = 0; r < n; r++) {
        for (let c = 0; c < m; c++) {
            let v = board[r][c]
            if (root.keys.has(v)) {
                visited[r][c] = true
                search(root.keys.get(v), r, c, visited)
                visited[r][c] = false
            }
        }
    }
    return Array.from(result)
};