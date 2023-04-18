const dfs = (node, adjList, visited, heightMap, path) => {
    let heightPath = heightMap.get(node)
    if (heightPath && !heightPath[1].has(node)) {
        return heightPath
    }
    if (!path.has(node)) path.set(node, new Set())
    path.get(node).add(node)
    visited.add(node)
    const arr = adjList.get(node)
    if (!arr.length) return 0;
    let max = 0
    let maxChild;
    arr.forEach(child => {
        if (!visited.has(child)) {
            let value  = dfs(child, adjList, visited, heightMap, path) + 1
            if (value > max) {
                max = value
                maxChild = child
            }
        }
    })
    if (maxChild !== undefined) path.get(node).add(maxChild)
    return max;
}
// Depth-First-Search
// Time: O(V * E)
// Space: O(V + E)
var findMinHeightTrees = function(n, edges) {
        const adjList = new Map(), heightMap = new Map(), path = new Map();
        for (let i = 0; i < n; i++) {
            adjList.set(i, [])
        }
        for (let [x, y] of edges) {
            adjList.get(x).push(y);
            adjList.get(y).push(x);
        }
        let minHeightTrees = []


        for (let i = 0; i < n; i++) {
            let prev = minHeightTrees[0]
            const height = dfs(i, adjList, new Set(), heightMap, path)

            heightMap.set(i, [height, path])

            if (!prev) {
                minHeightTrees.push([height, i])
            } else {
                let prevHeight = prev[0]
                if (prevHeight === height) {
                    minHeightTrees.push([height, i])
                } else if (height < prevHeight) {
                    minHeightTrees = [[height, i]]
                }
            }
        }
        return minHeightTrees.map(a => a[1])
};

console.log(findMinHeightTrees(n = 6, edges = [[3,0],[3,1],[3,2],[3,4],[5,4]]))