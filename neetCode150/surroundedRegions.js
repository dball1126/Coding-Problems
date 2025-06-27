
class Node {
    constructor(val, region) {
        this.val = val; this.region = region;
    }
}
// Union Find
// Time: O(r * c)...row * columns * amortized time for the find method(which is considered constant)
// Space: O(r * c)
var solve = function(board) {
    let m = board.length, n = board[0].length
    let root = [...new Array(m*n)], rank = [...new Array(m*n)], map = new Map()
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            let idx = r * n + c
            root[idx] = idx; rank[idx] = 1; 
            if (board[r][c] === 'O') {
                let region = true;
                if (r === 0 || c === 0 || r === m-1 || c === n-1) {
                    region = false;
                }
                map.set(idx, new Node(idx, region))
            }
        }
    }
    const find = (n) => root[n] === n ? n : root[n] = find(root[n])
    const union = (i, j, valid) => {
        let p1 = find(root[i]), p2 = find(root[j])
        let r1 = rank[p1], r2 = rank[p2]
        if (p1 === p2) return;
        if (r1 > r2) {
            root[p2] =  p1;
        } else if (r2 > r1) {
            root[p1] = p2
        } else { 
            root[p2] = p1; rank[p1]++
        }
        let node1 = map.get(p1)
        let node2 = map.get(p2)
        node1.region = node1.region && valid
        node2.region = node2.region && valid
    }
    const dirs = [[1,0], [0,1], [-1,0],[0,-1]]
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            let idx = r * n + c
            if (board[r][c] === 'O') {
                dirs.forEach(dir => {
                    let [x, y] = dir
                    let idx2 = (r+x) * n + (c+y)
                    if (r+x >= 0 && r+x < m && c+y >= 0 && c+y < n) {
                        if (board[r+x][c+y] === 'O') {
                            let region = true;
                            if (r === 0 || c === 0 || r === m-1 || c === n-1 || r+x === 0 || c+y === 0 || r+x === m-1 || c+y === n-1) {
                                region =false;
                            }
                            union(idx, idx2, region)
                        }
                    }
                })
            }
        }
    }
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (board[r][c] === 'O' && map.get(find(r * n + c)).region) {
                board[r][c] = 'X'
            }
        }
    }
};

console.log(
    solve(
        [
            ["X","X","X","X"],
            ["X","O","O","X"],
            ["X","X","O","X"],
            ["X","O","O","X"],
            ["X","X","X","X"]
        ]
        )
)