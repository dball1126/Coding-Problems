class DisJoinSet {
    rank = []
    root = []
    islands = 0
    constructor(n) {
        for (let i = 0; i < n; i++) {
            this.islands++
            this.root[i] = i
            this.rank[i] = 1   
        }
    }
    find(n) {
        let p = this.root[n];
        if (n === p) return n;
        this.root[n] = this.find(p)
        return this.root[n]
    }
    union(n1, n2) {
        let p1 = this.find(n1), p2 = this.find(n2)
        if (p1 === p2) return;
        this.islands--

        if (this.rank[p1] > this.rank[p2]) {
            this.root[p2] = p1
        } else if (this.rank[p1] < this.rank[p2]) {
            this.root[p1] = p2
        } else {
            this.rank[p1]++
            this.root[p2] = p1
        }
    }
}


/**
 * Time & Space: O(V)
 */
var countComponents = function(n, edges) {
    const unionFind = new DisJoinSet(n)

    for (let i = 0; i < edges.length; i++) {
        let edge1 = edges[i][0], edge2 = edges[i][1];
        unionFind.union(edge1, edge2)
    }
    return unionFind.islands
};

console.log(countComponents( n = 5, edges = [[0,1],[1,2],[2,3],[3,4]]))