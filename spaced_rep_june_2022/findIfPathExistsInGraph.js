/**
 * Adjacency List, BFS, visited set
 * Time: O(V + E)
 * Space: O(E)
 */
var validPath = function(n, edges, source, destination) {
    if (source === destination) return true;
    const buildAdjList = (n , e) => {
        let map = new Map();
        for (let i = 0; i < n; i++) {
            map.set(i, new Set())

        }
        for (let i = 0; i < e.length; i++) {
            const e1 = e[i][0], e2 = e[i][1]
            map.get(e1).add(e2)
            map.get(e2).add(e1)
        }
        return map;
    }
    let visited = new Set(), queue = [source], list = buildAdjList(n, edges)
    while (queue.length) {
        let curr = queue.shift();
        if (source === destination) return true;
        if (visited.has(curr)) continue;
        visited.add(curr)
        let set = list.get(curr)
        if (set.has(destination)) return true
        let arr = Array.from(set)
        arr.forEach(e => {
            if (!visited.has(e)) queue.push(e)
        })
    }
    return false;
};

console.log(validPath(n = 6, edges = [[0,1],[0,2],[3,5],[5,4],[4,3]], source = 0, destination = 5))