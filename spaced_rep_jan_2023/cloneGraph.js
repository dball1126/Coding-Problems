function Node(val, neighbors) {
   this.val = val === undefined ? 0 : val;
   this.neighbors = neighbors === undefined ? [] : neighbors;
};

// Breadth-First-Search
// Time: O(V + E), Space: O(E)
var cloneGraph = function(root) {
    if(!root) return null;
    let clone = null;
    let nodeMap = new Map(), queue = [root]
    while (queue.length) {
        let node = queue.shift();
        let newNode = new Node(node.val, [])
        if (nodeMap.has(newNode.val)) {
            newNode = nodeMap.get(newNode.val)
        }
        if (!clone) clone = newNode;
        let newNeighbors = []
        nodeMap.set(node.val, newNode)

        node.neighbors.forEach(n => {
            let newN = new Node(n.val, [...n.neighbors])
            if (nodeMap.has(n.val)) {
                newN = nodeMap.get(n.val)
            }
            newNeighbors.push(newN)
            if (!nodeMap.has(n.val)) {
                queue.push(newN)
            }
            nodeMap.set(newN.val, newN)
        })
        newNode.neighbors = newNeighbors;
    }
    return clone;
};