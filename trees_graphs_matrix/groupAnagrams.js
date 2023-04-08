class UnionFind {
    rank = []
    root = []
    resultMap = new Map()
    constructor(strs, resultMap) {
        this.resultMap = resultMap
        this.rank = new Array(strs.length)
        this.root = new Array(strs.length)
        strs.forEach((str, i) => {
            this.root[i] = i; this.rank[i] = 1;
        })
    }
    isConnected(node1, node2) {
        return this.find(node1) === this.find(node2)
    }
    find(node) {
        let parent = this.root[node]
        if (node === parent) return parent;
        this.root[node] = this.find(this.root[node])
        return this.root[node]
    }
    union(node1, node2) {
        let parent1 = this.find(node1), parent2 = this.find(node2)
        if (parent1 === parent2) return;

        if (this.rank[parent1] > this.rank[parent2]) {
            let words = this.resultMap.get(parent2)
            this.resultMap.get(parent1).push(...words)
            this.resultMap.delete(parent2)
            this.root[parent2] = parent1
        } else if (this.rank[parent1] < this.rank[parent2]) {
            let words = this.resultMap.get(parent1)
            this.resultMap.get(parent1).push(...words)
            this.resultMap.delete(parent1)
            this.root[parent1] = parent2
        } else {
            this.rank[parent1] += 1
            let words = this.resultMap.get(parent2)
            this.resultMap.get(parent1).push(...words)
            this.resultMap.delete(parent2)
            this.root[parent2] = parent1
        }
    }
}
// Union Find
// Time: O(n^2 * m)...n for strs.length and m for word length
// Space: O(n * m)
const groupAnagrams = (strs) => {
    if (!strs.length) return [[""]]
    if (strs.length === 1) return [strs]
    let resultMap = new Map(), strMap = new Map(), result = []

    strs.forEach((str, i) => {
        let map = new Map()
        for (let i = 0; i < str.length; i++) {
            const char = str[i];
            if (!map.has(char)) map.set(char, 0)
            map.set(char, map.get(char)+1)
        }
        strMap.set(str, map)
        resultMap.set(i, [str])
    })
    const similar = (w1, w2) => {
        if (w1.length !== w2.length) return false;
        let strMap1 = strMap.get(w1)
        let strMap2 = strMap.get(w2)
        let check = true;
        for (let i = 0; i < w1.length; i++) {
            const char = w1[i];
            if (!strMap2.has(char) || strMap2.get(char) !== strMap1.get(char)) {
                check = false; break;
            }
        }
        return check;
    }
    const unionFind = new UnionFind(strs, resultMap)
    for (let i = 0; i < strs.length-1; i++) {
        for (let j = i+1; j < strs.length; j++) {
            if (!unionFind.isConnected(i, j)) {
                if (similar(strs[i], strs[j])) {
                    unionFind.union(i, j)
                }
            } else if (j === i+1) {
                break;}}      }
    for (let [k, v] of resultMap) {
        result.push(v)
    }
    return  result
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))