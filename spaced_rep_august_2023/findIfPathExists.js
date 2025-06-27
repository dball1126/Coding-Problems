
// DFS, STACK
// Time and Space: O(n)
var validPath = function(n, edges, src, dest) {
    const adjList = new Map(), stack = [src], visited = new Set()

    for (let [x, y] of edges) {
        if (!adjList.has(x)) adjList.set(x, [])
        if (!adjList.has(y)) adjList.set(y, [])
        adjList.get(x).push(y)
        adjList.get(y).push(x)
    }
    while (stack.length) {
        const nde = stack.pop();
        visited.add(nde)
        if (nde === dest) return true
        if (adjList.has(nde)) {
            const arr = adjList.get(nde)
            for (let node of arr) {
                if (node === dest) return true
                if (!visited.has(node)) {
                    stack.push(node);
                    visited.add(node);
                }
            }
        }
    }
    return false;
};