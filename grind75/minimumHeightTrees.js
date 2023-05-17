const dfs = (n, adjList, visited) => {
    let maxHeight = 0, stack = [[n, 0]]
    while (stack.length) {
        let [node, height] = stack.pop();
        maxHeight = Math.max(maxHeight, height)
        visited.add(node)

        if (adjList.has(node)) {
            const edges = adjList.get(node)
            edges.forEach(edge => {
                if (!visited.has(edge)) {
                    visited.add(edge)
                    if (adjList.has(edge) && adjList.get(edge).length) {
                        stack.push([edge, height + 1])
                    }
                    maxHeight = Math.max(maxHeight, height+1)
                }
            })
        }
    }
    return maxHeight;
}
// Depth-First-Search
// Time: O(V * E)
// Space: O(V + E)
var findMinHeightTrees = function(n, edges) {

   let adjList = new Map(), minHeights = [], minHeight = Infinity

   for (let [x, y] of edges) {
    if (!adjList.has(x)) adjList.set(x, [])
    if (!adjList.has(y)) adjList.set(y, [])
        adjList.get(x).push(y)
        adjList.get(y).push(x)
   }

    for (let i = 0; i < n; i++) {
        let height = dfs(i, adjList, new Set())

        if (height === minHeight) {
            minHeights.push(i)
        } else if (height < minHeight) {
            minHeights = [i]
            minHeight = height
        }
    }
    return minHeights
};

console.log(findMinHeightTrees(n = 1, edges = []))