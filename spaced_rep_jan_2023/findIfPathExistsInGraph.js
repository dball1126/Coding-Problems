
// Depth-First-Search
// Time and Space: O(V + E)
var validPath = function(n, edges, source, destination) {
    let visited = new Set();
    let adjList = new Map();
    for(let i = 0; i < n; i++) {
        adjList.set(i, new Set())
    }
    for (let [x, y] of edges) {
        adjList.get(x).add(y);
        adjList.get(y).add(x);
    }
    let stack = [source];
    visited.add(source);
    while (stack.length) {
        node = stack.pop();
        if (node === destination) return true;
        let set = adjList.get(node);
        if (set.has(destination)) return true;
        Array.from(set).forEach(nde => {
            if (!visited.has(nde)) {
                visited.add(nde);
                stack.push(nde);
            }
        })
    }
    return false;
};