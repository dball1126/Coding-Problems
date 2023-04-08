
// class UnionFind {
//     rank = []; root = []; provinces = 0;
//     constructor(arr) {
//         this.provinces = arr.length;
//         arr.forEach((v, i) => {
//             this.rank[i] = 1;
//             this.root[i] = i
//         })
//     }
//     find(node) {
//         if (this.root[node] === node) return node;
//         this.root[node] = this.find(this.root[node])
//         return this.root[node]
//     }
//     union(node1, node2) {
//         let parent1 = this.find(node1), parent2 = this.find(node2)
//         if (parent1 === parent2) return;
//         this.provinces--
//         if (this.rank[parent1] > this.rank[parent2]) {
//             this.root[parent2] = parent1
//         } else if (this.rank[parent2] > this.rank[parent1]) {
//             this.root[parent1] = parent2
//         } else {
//             this.rank[parent1]++
//             this.root[parent2] = parent1
//         }
//     }
// }


class UnionFind {
    constructor(sz) {
        this.representative = new Array(sz);
        this.size = new Array(sz);

        for (let i = 0; i < sz; ++i) {
            // Initially each group is its own representative
            this.representative[i] = i;
            // Intialize the size of all groups to 1
            this.size[i] = 1;
        }
    }

    // Finds the representative of group x
    findRepresentative(x) {
        if (x == this.representative[x]) {
            return x;
        }

        // This is path compression
        return this.representative[x] = this.findRepresentative(this.representative[x]);
    }

    // Unite the group that contains "a" with the group that contains "b"
    union(a, b) {
        let representativeA = this.findRepresentative(a);
        let representativeB = this.findRepresentative(b);

        // If nodes a and b already belong to the same group, do nothing.
        if (representativeA == representativeB) {
            return;
        }

        // Union by size: point the representative of the smaller
        // group to the representative of the larger group.
        if (this.size[representativeA] >= this.size[representativeB]) {
            this.size[representativeA] += this.size[representativeB];
            this.representative[representativeB] = representativeA;
        } else {
            this.size[representativeB] += this.size[representativeA];
            this.representative[representativeA] = representativeB;
        }
    }
}


var accountsMerge = function(accounts) {
    let merge = [], merged = new Set(), wordMap = new Map()
    const unionFind = new UnionFind(accounts.length);
    accounts.forEach((a, i) => {
        for (let j = 1; j < a.length; j++) {
            if (!wordMap.has(a[j])) wordMap.set(a[j], [])
            wordMap.get(a[j]).push(i)
        }
    })

    for (let [k, v] of wordMap) {
        if (v.length > 1) {
            for(let i = 1; i < v.length; i++) {
                unionFind.union(v[0], v[i])
            }
        }
    }

    console.log(unionFind.size)

    return merge
};

console.log(accountsMerge([
    ["David","David0@m.co","David1@m.co"],
    ["David","David3@m.co","David4@m.co"],
    ["David","David4@m.co","David5@m.co"],
    ["David","David2@m.co","David3@m.co"],
    ["David","David1@m.co","David2@m.co"]]))

// console.log(accountsMerge([["John","johnsmith@mail.com","john_newyork@mail.com"],["John","johnsmith@mail.com","john00@mail.com"],["Mary","mary@mail.com"],["John","johnnybravo@mail.com"]]))



// [["David","David0@m.co","David1@m.co","David2@m.co","David3@m.co","David4@m.co","David5@m.co"]]