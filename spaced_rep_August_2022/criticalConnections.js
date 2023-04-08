/**
 * 
 */
var criticalConnections = function(n, nums) {
    const adjList = new Map(), connections = []
    for(let [val1, val2] of nums) {
        if (!adjList.has(val1)) adjList.set(val1, [])
        if (!adjList.has(val2)) adjList.set(val2, [])
        adjList.get(val1).push(val2)
        adjList.get(val2).push(val1)
    }
    let time = 0, times = new Map()
    const dfs = (node, parent) => {
        if (times.has(node)) return times.get(node)
        time++
        times.set(node, time)
        const distance = times.get(node)
        if (adjList.has(node)) {
            adjList.get(node).forEach(next => {
                if (next !== parent) {
                    let v = dfs(next, node)
                    if (distance < v) {
                        connections.push([node, next])
                    }
                    times.set(node, Math.min(times.get(node), v))
                }
            })
        }
        return times.get(node)
    }
    dfs(0, null)
    return connections
};