/**
 * There cannot be a cycle.
 * Create adjacency list.
 * Use DFS. Use a Stack OR Use recursion.
 * If for whatever reason the n does not equal the keys in the adjList return false.
 * Time Complexity: O(N + M) we may need to traverse all nodes and edges. N for nodes, M for edges.
 * Space Complexity: O(N) We will have N nodes in the adjacency list.  
 * 
 * @param {*} n 
 * @param {*} edges 
 * @param {*} source 
 * @param {*} destination 
 */

const adjacencyList = (edges) => {
    const map = new Map();
    for (let i = 0; i < edges.length; i++) {
        let [from, too] = edges[i];
        if (!map.has(too)) map.set(too, [])
        if (!map.has(from)) map.set(from, [])
        map.get(from).push(too)
    }
    return map;
}


var leadsToDestination = function(n, edges, source, destination) {
    let [stack, adjList] = [[source], adjacencyList(edges)]
    if (adjList.size === 0 && source === destination) return true; // handle only one element
    if (adjList.size < n) return false;
    if (adjList.get(destination) && adjList.get(destination).length > 0) return false // check this cycle....the destination cannot have children

    while (stack.length) {
        let node = stack.pop();
        let edges = adjList.get(node)
        if (edges.includes(node)) return false // cycle check

        if (!edges.length && node !== destination) return false; // if no edges....this must be the destination.

        for (let i = 0; i < edges.length; i++) {
            const edge = edges[i];
            if (adjList.get(edge).includes(node)) return false; // check for cycle.

            stack.push(edge)
        }
    }

    return true;
}




// console.log(leadsToDestination( 5,
//     [[0,1],[0,2],[0,3],[0,3],[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]],
//     0,
//     4))
// console.log(leadsToDestination(n = 4, edges = [[0,1],[0,3],[1,2],[2,1]], source = 0, destination = 3))
console.log(leadsToDestination( 1,
    [],
    0,
    0))