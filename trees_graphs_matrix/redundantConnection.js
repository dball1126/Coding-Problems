//Union find
// Time and Space: O(E) (edges + edges * α(N) = O(E))
class UnionFind {
    root = []; rank = []; redundantEdge = undefined;
    constructor(arr) {
        arr.forEach((n, i) => {
            this.rank[i+1] = 1; this.root[i+1] = i+1
        })
    }
    find(n) {
        if (n === this.root[n]) return n
        this.root[n] = this.find(this.root[n])
        return this.root[n]
    }
    union(n1, n2) {
        let parent1 = this.find(n1), parent2 = this.find(n2)
        if (parent1 === parent2) {
            return this.redundantEdge = [n1, n2]
        }
        if (this.rank[parent1] > this.rank[parent2]) {
            this.root[parent2] = parent1
        } else if (this.rank[parent1] < this.rank[parent2]) {
            this.root[parent1] = parent2
        } else {
            this.rank[parent1]++
            this.root[parent2] = parent1;
        }
    }
}
var findRedundantConnection = function(edges) {
    const unionFind = new UnionFind(edges)
    for (let [x, y] of edges) {
        unionFind.union(x, y)
    }
    return unionFind.redundantEdge
}; console.log(findRedundantConnection([[1,4],[3,4],[1,3],[1,2],[4,5]])) // = [1,3]