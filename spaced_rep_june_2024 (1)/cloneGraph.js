
// Definition for a Node.
function Node(val, neighbors) {
   this.val = val === undefined ? 0 : val;
   this.neighbors = neighbors === undefined ? [] : neighbors;
};
 

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    if (!node) return node;
    let graph, map = new Map(), stack = [node]

    while (stack.length) {
        let nde = stack.pop()
        let newNde;
        if (!map.has(nde)) {
            newNde = new Node(nde.val)
            map.set(nde, newNde)
        } else {
            newNde = map.get(nde)
        }
        if (!graph) graph = newNde;
        
        for (let n of nde.neighbors) {
            let child;
            if (!map.has(n)) {
                child = new Node(n.val)
                stack.push(n)
                map.set(n, child)
            } else {
                child = map.get(n)
            }
            newNde.neighbors.push(child)
        }
    }
    return graph;
};