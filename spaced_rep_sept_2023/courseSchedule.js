
// Topological Sort
// Time & Space: O(V + E)
var canFinish = function(numCourses, prerequisites) {
    const indegrees = new Array(numCourses).fill(0)
    let adjList = new Map(), queue = [], count = 0, visited = new Set()

    for(let [x, y] of prerequisites) {
        if (!adjList.has(x)) adjList.set(x, new Set())
        indegrees[y] = indegrees[y] + 1
        adjList.get(x).add(y)
    }
    indegrees.forEach((n, i) => n === 0 ? queue.push(i) : '')
    while (queue.length) {
        let nde = queue.shift()
        if (visited.has(nde)) return false
        count += 1
        if (numCourses === count) return true
        visited.add(nde)
        if (adjList.has(nde)) {
            let arr = Array.from(adjList.get(nde))
            arr.forEach(n => {
                indegrees[n] = indegrees[n] - 1
                if (indegrees[n] === 0) {
                    queue.push(n)
                }
            })
        }
    }
    return count === numCourses ? true : false
};
console.log(canFinish(3,[[1,0],[2,1]]))