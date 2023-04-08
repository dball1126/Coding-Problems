/**
 * Topological Sort, Time and Space O(V + E)
 *  
 */
var findOrder = function(c, p) {
    let indegrees = new Array(c).fill(0), degrees = new Map()
    let result = [], q = []
    for (let i = 0; i < p.length; i++) {
        let [v, k] = [p[i][0], p[i][1]]
        if (!degrees.has(k)) degrees.set(k, new Set())
        degrees.get(k).add(v)
        indegrees[v] += 1
    }
    indegrees.forEach((v, i) => {
        if (v === 0) q.push(i)
    })
    while (q.length) {
        let n = q.shift();
        result.push(n)
        if (result.length >= c) return result;
        if (degrees.has(n)) {
            let arr = Array.from(degrees.get(n))
            for(let i = 0; i < arr.length; i++) {
                let v = arr[i]
                indegrees[v] -= 1
                if (degrees.has(v) && degrees.get(v).has(n)) return []
                if (indegrees[v] === 0) q.push(v)
            }
        }
    }
    if (result.length < c) return []
    return result;
}