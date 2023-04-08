class DisJoinSet {
    root = []
    rank = []
    provinces = 0
    constructor(a) {
        this.provinces = a.length;
        this.init(a);
    }
    init(a) {
        for (let i = 0; i < a.length; i++) {
            this.rank[i] = 1;
            this.root[i] = i;
        }
    }
    isConnected(n1, n2) {
        return this.find(n1) === this.find(n2)
    }
    find(n) {
        if (n === this.root[n]) return n;
        return this.root[n] = this.find(this.root[n]) 
    }
    union(n1, n2) {
        let [p1, p2] = [this.find(n1), this.find(n2)]
        if (p1 === p2) return;
        this.provinces -= 1;
        if (this.rank[p1] > this.rank[p2]) {
            this.root[p2] = p1;
        } else if (this.rank[p1] < this.rank[p2]) {
            this.root[p1] = p2;
        } else {
            this.root[p2] = p1;
            this.rank[p1] += 1
        }
    }
}
/**
 * Union Find
 * Time and Space O(E) for edges
 */
var findCircleNum = function(a) {
    const unionFind = new DisJoinSet(a);
    for (let i = 0; i < a.length; i++) {
        for (let j = i; j < a[i].length; j++) {
            if (a[i][j] === 1) {
                unionFind.union(i, j)
            }
        }
    }
    return unionFind.provinces;
};