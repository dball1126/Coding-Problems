class DisJoinSet {
    rank = []
    root = []
    constructor(v) {this.init(v)}
    init(v) {
        v.forEach((e, i) => {
            this.rank[i] = 1;
            this.root[i] = i;
        })
    }
    isConnected(x, y) {
        return this.find(x) === this.find(y);
    }
    find(x) {
        if (this.root[x] === x) return x;
        return this.root[x] = this.find(this.root[x]);
    }
    union(x, y) {
        if (this.find(this.root[x]) === this.find(this.root[y])) return;
        let [v1, v2] = [this.find(this.root[x]), this.find(this.root[y])]
        if (this.rank[v1] > this.rank[v2]) {
            this.root[v2] = v1
        } else if (this.rank[v1] < this.rank[v2]) {
            this.root[v1] = v2;
        } else {
            this.root[y] = this.root[x]
            this.rank[x]++
        }
    }
}

var findCircleNum = function(c) {
    const disJoinSet = new DisJoinSet(c);
    if (!disJoinSet.root.length) return 0;
    let set = new Set();

    for (let i = 0; i < c.length; i++) {
        for (let j = i; j < c[i].length; j++) {
            if (c[i][j] === 1) {
                disJoinSet.union(i, j)
            }
        }
    }
console.log(disJoinSet)

    disJoinSet.root.forEach(e => set.add(e))
    return set.size
};
// 
console.log(findCircleNum([[1,1,0],[1,1,0],[0,0,1]]))