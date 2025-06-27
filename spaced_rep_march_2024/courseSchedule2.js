

// Topological Sort
// Time and Space: O(V + E)...vertex + edge
var findOrder = function(courses, pre) {
    let indegrees = [...new Array(courses)].fill(0)
    const adjList = new Map(), result = []

    for (let [v, k] of pre) {
        if (!adjList.has(k)) adjList.set(k, [])
        adjList.get(k).push(v)
        indegrees[v]++
    }

    let queue = []
    indegrees.forEach((v, i) => {
        if (v === 0) queue.push(i)
    })

    while (queue.length) {
        let nde = queue.shift();
        result.push(nde)

        if (adjList.has(nde)) {
            for (let n of adjList.get(nde)) {
                indegrees[n]--
                if (indegrees[n] === 0) {
                    queue.push(n)
                }
            }
        }
    }
    return result.length === courses ? result : []
};
console.log(findOrder(numCourses = 4,prerequisites =[[1,0],[2,0],[3,1],[3,2]]))
//=[ 0, 1, 2, 3 ]


