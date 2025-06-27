/**
 * @param {number[][]} edges
 * @return {number}
 */
// Depth-First-search
// Time: O(V + (E^2))
// Space: O(E)...for edges
var treeDiameter = function(edges) {
    // find root
    const adjList = new Map() // O(E)
    const indegrees = new Map()
    let longestPath = 0
    for (let [x, y] of edges) { // setup adjList // O(E) for edges
        if (!adjList.has(x)) adjList.set(x, [])
        if (!adjList.has(y)) adjList.set(y, [])
        if (!indegrees.has(y)) indegrees.set(y, 0)
        if (!indegrees.has(x)) indegrees.set(x, 0)
        indegrees.set(y, indegrees.get(y) + 1)
        adjList.get(x).push(y)
    }
    let root;
    for (let [key, v] of indegrees) { // find root
        if (v === 0) {
            root = key
            break;
        }
    }

    const dfs = (root, depth) => { // O(v + E + E^2)
        if (root === undefined || root === null) return depth; // base case
    


        let depths = []
        const arr = adjList.get(root)
        if (!arr.length) return depth

        longestPath = Math.max(longestPath, depth)
        let biggestDepth = 0
        for (let n of arr) { // E
            const value = dfs(n, depth)
            depths.push(value)
        }
        for (let i = 0; i < depths.length; i++) { // O(E^2)
            longestPath = Math.max(depth + depths[i], longestPath)
            biggestDepth = Math.max(biggestDepth, depths[i])
            for (let j = i+1; j < depths.length; j++) {
                if (j === i) continue;
                let path = depths[i]  + depths[j]
                longestPath = Math.max(longestPath, path)
                biggestDepth = Math.max(biggestDepth, depths[j])
            }
        }

        return biggestDepth + depth + 1
    }
    dfs(root, 0)
    return longestPath
};  

console.log(treeDiameter([[0,1],[1,2],[2,3],[1,4],[4,5]]))