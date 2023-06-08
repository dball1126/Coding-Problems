class Node {
    constructor(val, valid) {
        this.val = val; this.valid = valid;}
}
var solve = function(regions) {
    const dirs = [[1,0],[0,1],[-1,0],[0,-1]]
    let n = regions.length, m = regions[0].length
    let root = new Array(n * m), rank = new Array(n * m)

    const find =(node) => {
        let parent = root[node.val]
        if (parent.val === node.val) return node
        root[node.val] = find(root[node.val])
        return root[node.val]
    }
    
    const union = (n1, n2) => {
        n1 = find(n1), n2 = find(n2)
        if (n1.val === n2.val) return;
        let rank1 = rank[n1.val], rank2 = rank[n2.val]
        if (rank1 > rank2) {
            root[n2.val].val = n1.val
        } else if (rank2 > rank1) {
            root[n1.val].val = n2.val
        } else {
            root[n2.val].val = n1.val 
            rank[n1.val]++
        }
    }
    // initializaion for union find
    for (let r = 0; r < n; r++) {
        for (let c = 0; c < m; c++) {
            let idx = r * m + c, valid = false 
            if (regions[r][c] === 'O') {
                if (r > 0 && c > 0 && r < n-1 && c < m-1) {
                    valid = true;
                }
            }
            root[idx] = new Node(idx, valid)
            rank[idx] = 1
        }
    }

    // union surrounded cells with 'O' value
    for (let r = 0; r < n; r++) {
        for (let c = 0; c < m; c++) {
            let idx1 = r * m + c
            if (regions[r][c] === 'O') {
                for (let [x, y] of dirs) {
                    let rT = (r + x), cT = (c + y)
                    let idx2 = rT * m + cT

                    if (rT >= 0 && cT >= 0 && rT < n && cT < m) {
                        if (regions[rT][cT] === 'O') {
                            root[idx1].valid = root[idx1].valid && root[idx2].valid
                            root[idx2].valid = root[idx2].valid && root[idx1].valid
                            union(root[idx1], root[idx2])
                        }
                    }
                }                
            }
        }
    }
    // surround the regions
    for (let r = 0; r < n; r++) {
        for (let c = 0; c < m; c++) {
            let idx = r * m + c
            if (regions[r][c] === 'O') {
                if (root[idx].valid) regions[r][c] = 'X'
            }
        }
    }
    return regions
};

console.log(solve([["X","O","O","X","X","X","O","X","X","O","O","O","O","O","O","O","O","O","O","O"],["X","O","O","X","X","O","O","X","O","O","O","X","O","X","O","X","O","O","X","O"],["O","O","O","X","X","X","X","O","X","O","X","X","O","O","O","O","X","O","X","O"],["O","O","O","X","X","O","O","X","O","O","O","X","X","X","O","O","X","O","O","X"],["O","O","O","O","O","O","O","X","X","X","O","O","O","O","O","O","O","O","O","O"],["X","O","O","O","O","X","O","X","O","X","X","O","O","O","O","O","O","X","O","X"],["O","O","O","X","O","O","O","X","O","X","O","X","O","X","O","X","O","X","O","X"],["O","O","O","X","O","X","O","O","X","X","O","X","O","X","X","O","X","X","X","O"],["O","O","O","O","X","O","O","X","X","O","O","O","O","X","O","O","O","X","O","X"],["O","O","X","O","O","X","O","O","O","O","O","X","O","O","X","O","O","O","X","O"],["X","O","O","X","O","O","O","O","O","O","O","X","O","O","X","O","X","O","X","O"],["O","X","O","O","O","X","O","X","O","X","X","O","X","X","X","O","X","X","O","O"],["X","X","O","X","O","O","O","O","X","O","O","O","O","O","O","X","O","O","O","X"],["O","X","O","O","X","X","X","O","O","O","X","X","X","X","X","O","X","O","O","O"],["O","O","X","X","X","O","O","O","X","X","O","O","O","X","O","X","O","O","O","O"],["X","O","O","X","O","X","O","O","O","O","X","O","O","O","X","O","X","O","X","X"],["X","O","X","O","O","O","O","O","O","X","O","O","O","X","O","X","O","O","O","O"],["O","X","X","O","O","O","X","X","X","O","X","O","X","O","X","X","X","X","O","O"],["O","X","O","O","O","O","X","X","O","O","X","O","X","O","O","X","O","O","X","X"],["O","O","O","O","O","O","X","X","X","X","O","X","O","O","O","X","X","O","O","O"]]))