class DisJoinSet {
    root = []
    rank = []
    islands = 0
    constructor(arr) {this.init(arr)}

    init(arr) {
        for (let i = 0; i < arr.length; i++) {
            root[i] = []
            rank[i] = []
            for (let j = 0; j < arr.length; j++) {
                if (arr[i][j] === "1") {
                    this.islands++;
                }
                this.root[i][j] = i + "" + j
                this.rank[i][j] = 1
            }
        }
    }
    find(n) {
        let p = n[parseInt(n[0])][parseInt(n[1])]
        if (n === p) return
        return this.root[p] = this.find(p)
    }
    union(n1, n2) {
        let p1 = this.find(n1)
        let p2 = this.find(n2)
        if (p1 === p2) return;
        this.islands--
        // if (this.root[parseInt(n[0])][parseInt(n[1])])
    }
}
/**
 * Union Find, time and space: O(v + e)
 */
var numIslands = function(grid) {

}