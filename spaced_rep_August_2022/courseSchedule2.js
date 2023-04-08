/**
 * Kahns algorithm
 * Topological Sort
 * Time & Space: O(V + E)
 */
const createPrerequistesMap = (m, a, indegrees) => {
    for (let i = 0; i < a.length; i++) {
        let v = a[i][0], k = a[i][1]
        m.get(k).add(v)
        indegrees[v]++
    }
}
var findOrder = function(n, p) {
    let pMap = new Map(), indegrees = new Array(n).fill(0)
    for (let i = 0; i < n; i++) {
        pMap.set(i, new Set())
    }
    createPrerequistesMap(pMap, p, indegrees)
    let result = [], q = []
    for (let i = 0; i < n; i++) {
        if (indegrees[i] === 0) q.push(i)
    }
    while (q.length) {
        let n = q.shift();
        if (indegrees[n] <= 0) {
            result.push(n)
        }
        let arr = Array.from(pMap.get(n))

        for (let i = 0; i < arr.length; i++) {
            if (pMap.get(arr[i]).has(n)) return []
            indegrees[arr[i]]-=1
                if (indegrees[arr[i]] <= 0) q.push(arr[i])
        }
    }
    return result.length === n ? result : [];
};

console.log(findOrder(4,
    [[1,0],[2,0],[3,1],[3,2]]
    ))