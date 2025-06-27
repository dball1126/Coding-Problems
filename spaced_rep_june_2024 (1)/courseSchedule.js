/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
// Topological Sort
// Time & Space: O(V + E)...for vertices and edges
var canFinish = function(numCourses, prerequisites) {
    let count = 0, adjList = new Map(), queue = []
    const indegrees = [...new Array(numCourses).fill(0)]
    for (let [e, v] of prerequisites) {
        indegrees[e]++
        if (!adjList.has(v)) adjList.set(v, new Set())
        adjList.get(v).add(e)
    }
    for (let i = 0; i < numCourses; i++) {
        if (indegrees[i] === 0) queue.push(i)
    }
    while (queue.length) {
        let nde = queue.shift()
        count++
        if (adjList.has(nde)) {
            let set = adjList.get(nde)
            for (let edge of Array.from(set)) {
                let eSet = adjList.get(edge)
                if (eSet && eSet.has(nde)) return false;
                indegrees[edge]--
                if (indegrees[edge] === 0) queue.push(edge)
            }
        }
    }
    return count === numCourses
};
console.log(canFinish(numCourses = 2, prerequisites = [[1,0],[0,1]]))// = false