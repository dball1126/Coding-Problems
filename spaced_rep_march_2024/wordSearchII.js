class Node {
    constructor() {
        this.isWord = false; this.keys = new Map();
        
    }
}
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
// Backtracking
// Time: O(n * (4^L))...n for # of words and L for longest word in the words
// Space: O(n)
var findWords = function(board, words) {
    const trie = new Node(), result = new Set(), n = board.length, m = board[0].length
    const visited = [...new Array(n)].map(a => [...new Array(m)].fill(false))
    const dirs = [[1,0],[-1,0],[0,1],[0,-1]]
    for (let word of words) { // build trie
        let root = trie;
        for (let i = 0; i < word.length; i++) {
            let c = word[i]
            if (!root.keys.has(c)) root.keys.set(c, new Node())
            root = root.keys.get(c)
            if (i === word.length-1) root.isWord = true;}
    }
    const backtrack = (nde, r, c, visited, curr) => {
        if (nde.isWord) result.add(curr)
        for (let [x, y] of dirs) {
            let x1 = r+x, y1 = y+c
            if (x1 >= 0 && x1 < n  && y1 >= 0 && y1 < m) {
                let c = board[x1][y1]
                if (nde.keys.has(c) && visited[x1][y1] === false) {
                    visited[x1][y1] = true;
                    backtrack(nde.keys.get(c), x1, y1, visited, curr + c)
                    visited[x1][y1] = false;}}}
    }
    for (let r = 0; r < n; r++) {
        for (let c = 0; c < m; c++) {
            let root = trie;
            if (root.keys.has(board[r][c])) {
                visited[r][c] = true
                backtrack(root.keys.get(board[r][c]), r, c, visited, board[r][c])
                visited[r][c] = false}}
    }
    return Array.from(result)
};


console.log(findWords(board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]))