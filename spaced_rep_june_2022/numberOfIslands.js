class DisJoinSet {
    root = []
    rank = []
    size = 0
    constructor(a) {
        this.rank = new Array(a.length * a[0].length).fill(0)
        this.root = new Array(a.length * a[0].length)
        this.init(a)
    }
    init(a) {
        let m = a.length, n = a[0].length
        for (let i = 0; i < a.length; i++) {
            for (let j = 0; j < a[i].length; j++) {
                if (a[i][j] === "1") {
                    this.root[i * n + j] = i * n + j
                    this.rank[i * n + j] = 1
                    this.size++;
                }
            }
        }
    }
    find(i) {
        let p = this.root[i]
        if (i === p) return i;
        this.root[i] = this.find(this.root[i]);
        return this.root[i]
    }
    union(i, j) {
        let p1 = this.find(i), p2 = this.find(j)
        if (p1 === p2) return;
        this.size--
        if (this.rank[p1] > this.rank[p2]) {
            this.root[p2] = p1
        } else if (this.rank[p1] < this.rank[p2]) {
            this.root[p1] = p2
        } else {
            this.root[p2] = p1;
            this.rank[p1] += 1
        }
    }
}

var numIslands = function(a) {
    if (!a || !a.length) return 0;
    let unionFind = new DisJoinSet(a)
    let m = a.length, n = a[0].length
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < a[i].length; j++) {
            if (a[i+1] && a[i+1][j] === "1" && a[i][j] === "1") {
                unionFind.union(i * n + j, (i+1) * n + j)
            }
            if (a[i][j+1] && a[i][j+1] === "1" && a[i][j] === "1") {
                unionFind.union(i * n + j, i * n + (j+1))
            }
        } 
    }
    return unionFind.size
}

console.log(numIslands([
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ]))