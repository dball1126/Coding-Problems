/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
// Depth-First-Search with Adjacency List
// Time and Space: O(V + E)
var validPath = function(n, edges, source, destination) {
    if (source === destination) return true;
    const adjList = new Map(), visited = new Set(), stack = []

    for (let [x , y] of edges) {
        if (!adjList.has(x)) adjList.set(x, new Set());
        if (!adjList.has(y)) adjList.set(y, new Set());
        adjList.get(x).add(y);
        adjList.get(y).add(x);
    }

    if (adjList.has(source)) stack.push(source)

    while (stack.length) {
        const nde = stack.pop();
        visited.add(nde);
        if (nde === destination) return true;
        if (adjList.has(nde)) {
            const nodes = adjList.get(nde)
            if (nodes.has(destination)) return true;
            Array.from(nodes).forEach(n => {
                if (!visited.has(n)) {
                    visited.add(n)
                    stack.push(n);
                }
            })
        }
    }
    return false;
};



