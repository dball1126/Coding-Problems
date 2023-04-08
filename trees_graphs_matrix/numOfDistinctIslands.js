class Node {
    constructor(key = '', islands = []) {
        this.key = key;
        this.islands = islands;
    }
}

class UnionFind {
    rank = []; root = []; islands = 0;
    constructor(arr) {
        this.islands = arr.length;
        arr.forEach((v, i) => {
            this.rank[i] = 1;
            this.root[i] = i
        })
    }
    find(node) {
        if (this.root[node] === node) return node;
        this.root[node] = this.find(this.root[node])
        return this.root[node]
    }
    union(node1, node2) {
        let parent1 = this.find(node1), parent2 = this.find(node2)
        if (parent1 === parent2) return;
        this.islands--
        if (this.rank[parent1] > this.rank[parent2]) {
            this.root[parent2] = parent1
        } else if (this.rank[parent2] > this.rank[parent1]) {
            this.root[parent1] = parent2
        } else {
            this.rank[parent1]++
            this.root[parent2] = parent1
        }
    }
}
// BFS Matrix traversal with union find
// Space: O(r * c)
// Time: O(r * c )...union find with path compression is amortized time
var numDistinctIslands = function(grid) {
    
    let groups = new Map()
    let islands = []
    let dir = [[1, 0], [0, 1], [-1, 0], [0, -1]]
    let m = grid.length, n = grid[0].length
    
    // group the islands together
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[r].length; c++) {
            if (grid[r][c] === 1) {
                let island = []
                let queue = [[r,c]]
                while (queue.length) {
                    let [x, y] = queue.shift();
                    island.push([x, y])
                    grid[x][y] = ''
                    dir.forEach(([row, col]) => {
                        if (x + row < m && x + row >= 0 && y + col >= 0 && y + col < n ) {
                            if (grid[x+row][y+col] === 1) {
                                queue.push([x+row, y+col])
                                grid[x+row][y+col] = ''
                            }
                        }
                    })
                }
                let key = islands.length
                islands.push(key)
                if (!groups.has(island.length)) {
                    groups.set(island.length, [])
                }
                groups.get(island.length).push(new Node(key, island))
            }   
        }
    }
    const unionFind = new UnionFind(islands)
    // iterate over the islands and "union" them if needed
    for (const group of groups) {
    
        if (group[1].length === 1) continue;
        for (let i = 0; i < group[1].length-1; i++) {
            for (let j = i+1; j < group[1].length; j++) {
                let merge = true;
                let grp1 = group[1][i].islands, grp2 = group[1][j].islands
                if (grp1.length === 1 && grp2.length === 1) {
                    unionFind.union(group[1][i].key, group[1][j].key)
                } else {
                    // compare x and y coordinate differences
                    for (let k = 1; k < grp1.length; k++) {
                        let [x, y] = grp1[k]
                        let newX = grp1[k-1][0] - x;
                        let newY = grp1[k-1][1] - y
                        let [x2, y2] = grp2[k]
                        let newX2 = grp2[k-1][0] - x2;
                        let newY2 = grp2[k-1][1] - y2
                        if (newX !== newX2 || newY !== newY2) {
                            merge = false;
                            break;
                        }
                    }
                    if (merge) unionFind.union(group[1][i].key, group[1][j].key)
                }
            }
        }
    }
    return unionFind.islands
};
console.log(numDistinctIslands(grid =[[1,1,0,0,0],[1,1,0,0,0],[0,0,0,1,1],[0,0,0,1,1]])) // = 1