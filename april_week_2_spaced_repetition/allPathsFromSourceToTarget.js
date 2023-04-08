/**
 * BFS, Queue
 * Build adjList
 * Time and Space: O(V + E) = O(2^n + n)
 */
var allPathsSourceTarget = function(graph) {
    const paths = [];
    const q = [[0]]

    while (q.length) {
        const curr = q.shift();
        const c = curr[curr.length-1]
        if (c === graph.length-1) {
            paths.push(curr)
        } else {
            const arr = graph[c]
            if (arr) {
                arr.forEach(v => {
                    q.push([...curr, v])
                })
            }
        }
    }
    return paths;
};
