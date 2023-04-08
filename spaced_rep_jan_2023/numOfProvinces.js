
class UnionFind {
    rank = []; root = []; provinces = 0;
    constructor(arr) {
        this.provinces = arr.length;
        arr.forEach((v, i) => {
            this.rank[i] = 1;
            this.root[i] = i
        })
    }
    find(node) {
        if (this.root[node] === node) return node;
        this.root[node] = this.find(this.root[node])
        return this.root[node]
    }
    union(node1, node2) {
        let parent1 = this.find(node1), parent2 = this.find(node2)
        if (parent1 === parent2) return;
        this.provinces--
        if (this.rank[parent1] > this.rank[parent2]) {
            this.root[parent2] = parent1
        } else if (this.rank[parent2] > this.rank[parent1]) {
            this.root[parent1] = parent2
        } else {
            this.rank[parent1]++
            this.root[parent2] = parent1
        }
    }
}
// Disjoin Set, Union Find
// Time and Space: O(r * c) for rows * columns
// Amortized time for the union since path compression is used. 
var findCircleNum = function(isConnected) {
    const unionFind = new UnionFind(isConnected)
    for (let i = 0; i < isConnected.length; i++) {
        for (let j = 0; j < isConnected[i].length; j++) {
            if(isConnected[i][j] === 1) unionFind.union(i, j)
        }
    }
    return unionFind.provinces
};
console.log(findCircleNum([[1,1,0],[1,1,0],[0,0,1]])) // = 2
