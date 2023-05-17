// Topological Sort...outter most edges level order type
// Time & Space: O(V + E)
var minimumSemesters = function(n, relations) {
    let semesters = 0, queue = [], adjList = new Map(), indegrees = new Map()
    let firstLvl = [], visited = new Set()

    for (let [prev, next] of relations) {
        if (!adjList.has(prev)) adjList.set(prev, new Set())
        if (!indegrees.has(next)) indegrees.set(next, new Set())
        adjList.get(prev).add(next); indegrees.get(next).add(prev);
    }
    for (let i = 1; i <= n; i++) {
        if (!indegrees.has(i) || !indegrees.get(i).size) firstLvl.push(i)
    }
    if (!firstLvl.length) return -1;
    queue.push(firstLvl)

    while (queue.length) {
        let nextLvl = new Set(), nextLvlArr = [], level = queue.shift();
        semesters += 1;
        for (let node of level) {
            if (visited.has(node)) return -1;
            visited.add(node);
            if (adjList.has(node)) {
                let nodes = adjList.get(node)
                nodes.forEach(nde => {
                    if (indegrees.has(nde)) {
                        indegrees.get(nde).delete(node)
                        if (!(indegrees.get(nde).size) && !nextLvl.has(nde)) {
                            if (visited.has(nde)) return -1
                            nextLvl.add(nde)
                            nextLvlArr.push(nde)
                        }
                    }
                })
            }
        }
        if (nextLvlArr.length) queue.push(nextLvlArr)
    }
    if (visited.size !== n) return -1
    return semesters;
};
console.log(minimumSemesters(n = 3, relations = [[1,3],[2,3]])) // = 2