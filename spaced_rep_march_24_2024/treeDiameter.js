/**
 * @param {number[][]} edges
 * @return {number}
 */
// Breadth-First-Search
// Time and Space: O(n)
var treeDiameter = function(edges) {
    if (!edges.length) return 0

    const adjList = new Map() 
    let diameter = 0;
    let furthestNode = null;
    for (let [n1, n2] of edges) {  
        if (!adjList.has(n1)) adjList.set(n1, [])
        if (!adjList.has(n2)) adjList.set(n2, [])
        adjList.get(n1).push(n2)
        adjList.get(n2).push(n1)
    }

    const bfs = (nde) => { 
        let visited = new Set()  
        let queue = [[nde, 0]]
        while (queue.length) {
            let [nde, path] = queue.shift()

            if (diameter <= path) {
                furthestNode = nde;
                diameter = path
            }
            visited.add(nde)
            const edges = adjList.get(nde)
            edges.forEach(edge => {
                if (!visited.has(edge)) {
                    visited.add(edge)
                    queue.push([edge, path+1])
                }
            })

        }
    }   
    bfs(edges[0][0])
    bfs(furthestNode)

    return diameter
};
console.log(treeDiameter([[0,1],[1,2],[2,3],[1,4],[4,5]]))
/**
 *  [[0,1],[0,2]]
 *  0:[1, 2]   1: [0]  2 :[0]
 *  step 1  bfs (0)
 *  step 1  furtheset node = 0,   path - 0  visited = [1, 2] 
 *         queue = [[1, 1], [2, 1]]
 * 
 *  furtheset = 2,  diameter = 1
 * 
 *  BFS (2)
 */