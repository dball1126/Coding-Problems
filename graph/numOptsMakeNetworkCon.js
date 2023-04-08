class UnionFind {
    root = []; rank = []; connections = [];
    constructor(n) {
        for (let i = 0; i < n; i++) {
            this.root[i] = i
            this.rank[i] = 1
        }
    }
    isConnected(n1, n2) {
        return this.find(n1) === this.find(n2)
    }
    find(n) {
        if (n === this.root[n]) return n;
        this.root[n] = this.find(this.root[n])
        return this.root[n]
    }
    union(n1, n2) {
        let p1 = this.find(n1), p2 = this.find(n2)
        if (p1 === p2) return false;

        if (this.rank[p1] > this.rank[p2]) {
            this.root[p2] = p1
        } else if (this.rank[p2] > this.rank[p1]) {
            this.root[p1] = p2
        } else {
            this.rank[p1]++
            this.root[p2] = p1 
        }
        this.connections++
        return true;
    }
}
// Time & Space: O(n)...n for nodes...connections will be less then n
// Union find with path compression is Amorized time
// O(n * amorized time) = O(n)
var makeConnected = function(n, connections) {
    if (connections.length + 1 < n) return -1;
    let unionFindC = new UnionFind(n), connects = connections.length

    for (let [x, y] of connections) {
        if (connects > 0) {
            if (unionFindC.union(x, y)) {
                connects -= 1
            }
        }
    }
    return (n-1) - unionFindC.connections
};

console.log(makeConnected(n = 4, connections = [[0,1],[0,2],[1,2]]))// = 1