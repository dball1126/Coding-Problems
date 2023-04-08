

var findOrder = function(numC, pre) {
    let result = [], adjList = new Map(), indegrees = new Array(numC).fill(0), q = []
    for (let i = 0; i < pre.length; i++) {
        let v = pre[i][0], k = pre[i][1]
        indegrees[v]++
        if(!adjList.has(k)) {
            adjList.set(k, new Set([v]))
        } else {
            adjList.set(k, adjList.get(k).add(v))
        }
    }
    indegrees.forEach((v, idx) => {
        if (v === 0) q.push(idx)
    })
    while (q.length) {
        let v = q.shift()
        result.push(v)
        if (adjList.has(v)) {
            for(let c of adjList.get(v)) {
                indegrees[c]--
                if (indegrees[c] === 0) q.push(c)
                if (adjList.has(c)) {
                    if (adjList.get(c).has(v)) return []
                }
            } 
        }
    }
    if (result.length === indegrees.length) {
        return result
    }
    return []
};