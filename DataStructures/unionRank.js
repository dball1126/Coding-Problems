class UnionFind {
    root = []; // location of values
    rank = []; // height of each vertex

    constructor(size) {
        this.unionFind(size);
    }

    unionFind(size) { // initialization
        for (let i = 0; i < size; i++) {
            this.root[i] = i
            this.rank[i] = 1; // each vertex starts with a height of 1
        }
    }

    // join two vertices together
    union(x, y) { 
        let [rootX, rootY] = [this.find(x), this.find(y)];
        if (rootX === rootY) return; // no need to union

        if (this.rank[rootX] > this.rank[rootY]) { // union by rank, to reduce the height of the tree
            this.root[rootY] = rootX // choose the tree with the biggest height
        } else if (this.rank[rootX] < this.rank[rootY]) {
            this.root[rootX] = rootY;
        } else {
            this.root[rootY] = rootX //  chooes one, doesn't matter
            this.rank[rootX]++ // Make sure the new root has a larger height
        }
    }

    find(node) {
        if (node === this.root[node]) return node; // this node is the root node
        return this.root[node] = this.find(this.root[node]); // path compression, update all node's roots to be the defacto single root node
    }

    connected(x, y) { // If both nodes have the same root than it must be connected
        return this.find(x) === this.find(y)
    }
}

const uf = new UnionFind(10);
uf.union(1, 2);
uf.union(2, 5);
uf.union(5, 6);
uf.union(6, 7);
uf.union(3, 8);
uf.union(8, 9);
console.log(uf.root)
console.log(uf.root)

console.log(uf.connected(1, 5));
console.log(uf.connected(5, 7));
console.log(uf.connected(4, 9));


