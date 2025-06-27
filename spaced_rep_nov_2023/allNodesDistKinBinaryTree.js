// Adjaceny List // Graph
// Breadth-First-Search
// Time and Space: O(n)...n for nodes
var distanceK = function(root, target, k) {
    let adjList = new Map(), nodes = [], visited = new Set()

    const buildList = (nde) => {
        if (!nde) return
        if (!adjList.has(nde.val)) adjList.set(nde.val, new Set())
        if (nde.left) {
            if (!adjList.has(nde.left.val)) adjList.set(nde.left.val, new Set())
            adjList.get(nde.left.val).add(nde.val)
            adjList.get(nde.val).add(nde.left.val)
            buildList(nde.left)
        }
        if (nde.right) {
            if (!adjList.has(nde.right.val)) adjList.set(nde.right.val, new Set())
            adjList.get(nde.right.val).add(nde.val)
            adjList.get(nde.val).add(nde.right.val)
            buildList(nde.right)
        }
    }
    buildList(root) 
    if (adjList.has(target.val)) {
        const queue = [[target.val, 0]]
        while (queue.length) {
            let [val, dist] = queue.shift()
            visited.add(val)
            if (dist === k) nodes.push(val)
            if (dist+1 <= k) {
                Array.from(adjList.get(val)).forEach(n => {
                    if (!visited.has(n)) {
                        visited.add(n)
                        queue.push([n, dist + 1])
                    }
                })
            }
        }
    }
    return nodes;
};