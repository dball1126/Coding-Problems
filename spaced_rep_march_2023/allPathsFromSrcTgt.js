// verified by CHAT GPT that this is the correct time complexity because we copy the nodes

// Breadth-First-Search
// Time: O(V * E)...vertex * edges(since we make a copy)
// Space: O(V + E) for edges
var allPathsSourceTarget = function(graph) {
    let paths = [], queue = [[0]], n = graph.length-1

    while (queue.length) {
        let level = queue.shift();
        let curr = level[level.length-1]

        if (curr === n) {
            paths.push(level)
            continue;
        }

        let edges = graph[curr]
        if (edges && edges.length) {
            edges.forEach(edge => {
                queue.push([...level, edge])
            })
        }
    }
    return paths
};
console.log(allPathsSourceTarget([[1,2],[3],[3],[]]))//=[[0,1,3],[0,2,3]]
