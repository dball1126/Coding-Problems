/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

// Topological Sort
// TIme & Space: O(V + E)
var canFinish = function(numCourses, prerequisites) {
    const indegrees = [...new Array(numCourses)].fill(0)
    const map = new Map()
    const bfs = [], result = []
    for (let [a, b] of prerequisites) {
        indegrees[a]++
        if (!map.has(b)) map.set(b, new Set())
        if (!map.has(a)) map.set(a, new Set())
        map.get(b).add(a)
    }
    for (let i = 0; i < numCourses; i++) {
        if (indegrees[i] === 0) {
            bfs.push(i)
        }
    }
    while (bfs.length) {
        let nde = bfs.shift();
        result.push(nde)
        let arr = []
        if (map.has(nde)) arr =  Array.from(map.get(nde))
        for (let i of arr) {
            indegrees[i]--
            if (indegrees[i] === 0) {
                if (map.get(i).has(nde)) return false
                bfs.push(i)
            }
        }
    }
    return result.length === numCourses
};
console.log(canFinish( numCourses = 5, prerequisites =[[1,4],[2,4],[3,1],[3,2]] ))
// = true

