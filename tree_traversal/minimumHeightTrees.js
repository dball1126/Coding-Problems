var findMinHeightTrees = function(n, edges) {
    let adjList = new Map(), min = Infinity, heights = new Map()
    for (let [x, y] of edges) {
        if (!adjList.has(x)) adjList.set(x, [])
        if (!adjList.has(y)) adjList.set(y, [])
        adjList.get(x).push(y)
        adjList.get(y).push(x)
    }

    const dfs = (node, parent, target) => {
        if (!adjList.has(node)) return 1;
        let nextHeight = -Infinity
        adjList.get(node).forEach(n => {
            if (n !== parent && n !== target) {
                nextHeight = Math.max(nextHeight, dfs(n, node, target))
            }
        })
        if (nextHeight === -Infinity) nextHeight = 0
        
        if (!heights.has(nextHeight + 1)) heights.set(nextHeight + 1, [])
        if (node === target) {
            min = Math.min(min, nextHeight + 1)
            
            heights.get(nextHeight + 1).push(node)
        }

        return nextHeight + 1
    }
    for (let i = 0; i < n; i++) {
        dfs(i, null, i)
    }
    return heights.get(min)
};