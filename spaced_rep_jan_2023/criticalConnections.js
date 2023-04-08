// Tarjan's Algorithm....DFS
// Time and Space: O(V + E)
var criticalConnections = function(n, edges) {
    let adjList = new Map(), times = new Map(), criticalEdges = [], time = 0;
    for (let i = 0; i < n; i++) {
        adjList.set(i, [])}
    for (let [x, y] of edges) {
        adjList.get(x).push(y)
        adjList.get(y).push(x)}
    const dfs = (node, parent) => {
        if (times.has(node)) return times.get(node)
        times.set(node, time);
        time++;
        let minVal = Infinity
        for(let edge of adjList.get(node)) {
            if (edge !== parent) {
                minVal = Math.min(minVal, dfs(edge, node))}
        }
        times.set(node, Math.min(times.get(node), minVal))
        if (parent !== null && times.get(parent) < times.get(node)) {
            criticalEdges.push([node, parent])
        }
        return times.get(node);
    }
    dfs(0, null)
    return criticalEdges
};
console.log(criticalConnections(n = 4, connections = [[0,1],[1,2],[2,0],[1,3]]))//=[[3,1]]