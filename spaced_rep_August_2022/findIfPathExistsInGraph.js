
var validPath = function(n, edges, source, destination) {
    let graph = new Map()
    for (let i = 0; i < n; i++) {
        graph.set(i, new Set())
    }

    for (let i = 0; i < edges.length; i++) {
        let n1 = edges[i][0], n2 = edges[i][1];
        graph.get(n1).add(n2)
        graph.get(n2).add(n1)
    }

    let q = [source], visited = new Set()

    while (q.length) {
        let n = q.shift()
        if (visited.has(n)) continue
        if (n === destination) return true
        visited.add(n)
        let nodes = Array.from(graph.get(n))

        nodes.forEach(n1 => {
            q.push(n1)
        })
    }
    return false
};