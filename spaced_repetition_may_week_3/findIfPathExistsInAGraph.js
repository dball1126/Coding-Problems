/**
 * Adjacency List, Visited Set and DFS
 * Time and Space: O(V + E) for edges 
 */
const validPath = (n, a, source, destination) => {
    let [stack, adjList, visited] = [[source], new Map(), new Set()]

    for (let i = 0; i < a.length; i++) {
        let [e1, e2] = [a[i][0], a[i][1]]
        if (!adjList.has(e1)) adjList.set(e1, new Set())
        if (!adjList.has(e2)) adjList.set(e2, new Set())
        adjList.get(e1).add(e2)
        adjList.get(e2).add(e1)
    }

    while (stack.length) {
        let node = stack.pop();
        visited.add(node)
        if (node === destination) return true
        if (adjList.has(node)) {
            if (adjList.get(node).has(destination)) return true;
            stack.push(...Array.from(adjList.get(node)).filter(n1 => !visited.has(n1)))
        }
    }
    return false;
}