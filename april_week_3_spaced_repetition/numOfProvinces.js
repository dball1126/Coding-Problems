/**
 * Union Find
 * Time: (inverse Ackermann function): O(n * α(N))
 * We need O(n) to traverse the entire matrix.
 * When we have the combination of union by rank and the path compression optimization.
 * The Find, Union, and Connected  all take α(N) time on average. In practice α(N) is regarded as Constant time
 * All other operations take constant time.
 * https://leetcode.com/explore/featured/card/graph/618/disjoint-set/3843/
--------------------------------------------------------------------------------------------------------------
 * Space: O(n) (rank, root arrays)
 */
class UnionFind {
    rank = []
    root = []
    constructor(arr) {
        this.init(arr)
    }

    init(arr) {
        for (let i = 0; i < arr.length; i++) {
            this.rank[i] = 1
            this.root[i] = i
        }
    }

    union(n1, n2) {
        const p1 = this.find(n1)
        const p2 = this.find(n2)

        if (p1 === p2) return;
 
        if (this.rank[p1] > this.rank[p2]) {
            this.root[p2] = p1;
        } else if (this.rank[p1] < this.rank[p2]) {
            this.root[p1] = p2;
        } else {
            this.root[p2] = p1
            this.rank[p1]++
        }
    }

    find(n) {
        const p = this.root[n]
        if (n === p) return n;
        return this.root[n] = this.find(p);
    }

    isConnected(n1, n2) {
        return this.find(n1) === this.find(n2)
    }
}

const findCircleNum = (a) => {
    const graph = new UnionFind(a);

    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length; j++) {
            if (i !== j && a[i][j] === 1) {
                graph.union(i, j)
            }
        }
    }

    let set = new Set();
    graph.root.forEach(v => set.add(v))
    return set.size;
}

console.log(findCircleNum(isConnected = [[1,0,0],[0,1,0],[0,0,1]]))