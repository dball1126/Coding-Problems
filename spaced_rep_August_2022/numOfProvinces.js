class DisJoinSet {
    root = []
    rank = []
    provinces = 0
    constructor(n) {
        this.provinces = n.length
        for (let i = 0; i < n.length; i++) {
            this.rank[i] = 1;
            this.root[i] = i;
        }
    }
    find(n) {
        let p = this.root[n]
        if (n === p) return n;
        this.root[n] = this.find(this.root[n])
        return this.root[n]
    }
    union(a, b) {
        let p1 = this.find(a), p2 = this.find(b)
        if (p1 === p2) return;
        this.provinces--;

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
 * Time: O(1) + O(n) * O(n) * O(Amoritized time) = O(n*2)
 * Space: O(n) + O(n) = O(n)
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(n) {
    const disJoinSet = new DisJoinSet(n)
    for (let i = 0; i < n.length; i++) {
        for (let j = i; j < n[i].length; j++) {
            if (i !== j && n[i][j] === 1) {
                disJoinSet.union(i, j)
            }
        }
    }
    return disJoinSet.provinces;
};