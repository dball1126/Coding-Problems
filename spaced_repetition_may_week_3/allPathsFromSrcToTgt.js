/**
 * BFS: Level order traversal
 * Time and Space: O(V + E)
 */

var allPathsSourceTarget = function(graph) {
    let result = [], q = [[0]]

    while (q.length) {
        let curr = q.shift();
        let node = curr[curr.length-1]
        if (node === graph.length-1) {
            result.push(curr)
            continue;
        }
        let arr = graph[node]
        if (arr) {
            arr.forEach(v => q.push([...curr, v]))
        } 
    }
    return result;
}