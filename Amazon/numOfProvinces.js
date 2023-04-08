class UnionFind {
    root = []
    rank = []
    constructor(size) {
        this.unionFind(size)
    }

    unionFind (size) {
        for (let i = 0; i < size; i++) {
            this.root[i] = i;
            this.rank[i] = 1;
        }
    }

    union (x, y) {
        let [rX, rY] = [this.find(x), this.find(y)]

        if (this.root[rX] === this.root[rY]) return;

        if (this.rank[rX] > this.rank[rY]) {
            this.root[rY] = rX
        } else if (this.rank[rX] < this.rank[rY]) {
            this.root[rX] = rY
        } else {
            this.root[rY] = rX
            this.rank[rX]++
        }
    }

    find (n) {
        if (this.root[n] === n) return n;
        return this.root[n] = this.find(this.root[n]);
    }

    connected(x, y) {
        return this.find(x) === this.find(y);
    }
}

var findCircleNum = function(isConnected) {
    const uf = new UnionFind(isConnected.length);
    for (let i = 0; i < isConnected.length; i++) {
        for (let j = 0; j < isConnected.length; j++) {
            if (isConnected[i][j] === 1) {
                uf.union(i, j)
            }
        }
    }
    let set = new Set();
    for (let i = 0; i < uf.root.length; i++) {
        if (uf.root[i] === i) {
            set.add(uf.root[i])
        }
    }
    return set.size;
};

console.log(findCircleNum([[1,0,0,1],[0,1,1,0],[0,1,1,1],[1,0,1,1]]))