class Node {constructor(val) {this.val = val; this.area = 1}}
class UnionFind {
    root = []; rank = []; maxArea = 0
    constructor(grid) {
        this.root = [...new Array(grid.length * grid[0].length)]
        this.rank = [...new Array(grid.length * grid[0].length)]
        for (let r = 0; r < grid.length; r++) {
            for (let c = 0; c < grid[r].length; c++) {
                let idx = r * grid[r].length + c
                this.root[idx] = new Node(idx); this.rank[idx] = 1}   }
    }
    find (node) {
        if (node.val === this.root[node.val].val) return this.root[node.val];
        this.root[node.val] = this.find(this.root[node.val])
        return this.root[node.val]
    }
    union (i, j) {
        let p1 = this.find(this.root[i]), p2 = this.find(this.root[j])
        let v1 = p1.val, v2 = p2.val, r1 = this.rank[i], r2 = this.rank[j]
        if (v1 === v2) return;
        if (r1 > r2) {
            p2.val =  v1;
        } else if (r2 > r1) {
            p1.val = v2
        } else { p2.val = v1; this.rank[i]++} 
        let biggestArea = p1.area + p2.area
        p1.area = biggestArea; p2.area = biggestArea; this.root[p1.val].area = biggestArea
        this.maxArea = Math.max(this.maxArea, p1.area)}
}
// UnionFind with path compression
// Time & Space: O(r * c)...rows * columns
// union method  runs at amorized time which is considered constant
var maxAreaOfIsland = function(grid) {
    let unionFind = new UnionFind(grid), maxArea = 0
    const dirs = [[0,1],[1,0],[-1,0],[0,-1]]
    const n = grid.length, m = grid[0].length
    for (let r = 0; r < n; r++) {
        for (let c = 0; c < m; c++) {
            let val = grid[r][c], idx = r * m + c
            if (val === 1) {
                if (val === 1) maxArea = 1;
                dirs.forEach(dir => {
                    let r1 = r + dir[0], c1 = c + dir[1]
                    if (r1 >= 0 && c >= 0 && r1 < n && c1 < m) {
                        let idx2 = r1 * m + c1
                        if (grid[r1][c1] === 1) {
                            unionFind.union(idx, idx2)
                        }
                    }
                })
            }
        }
    }
    return Math.max(maxArea, unionFind.maxArea)
};

console.log(maxAreaOfIsland(
    [
    [1,0,1],
    [1,1,1],
    [0,0,1]]))