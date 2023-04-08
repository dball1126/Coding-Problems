
// Definition for a Node.
function Node(val, neighbors) {
   this.val = val === undefined ? 0 : val;
   this.neighbors = neighbors === undefined ? [] : neighbors;
};
 
// Time and Space: O(V + E)
var cloneGraph = function(node) {
    if (!node) return null
    let map = new Map();
    let visited = new Set();
    let root = new Node(node.val)
    map.set(root.val, root)
    let q = [[node, root]]

    while (q.length) {
        let curr = q.shift();
        let oldNode = curr[0], newNode = curr[1]

        if (visited.has(oldNode.val)) continue;
        visited.add(oldNode.val)

        oldNode.neighbors.forEach(n => {
            let newNeighbor;

            if (map.has(n.val)) {
                newNeighbor = map.get(n.val)
            } else {
                console.log("new Neighbor " + n.val)
                newNeighbor = new Node(n.val)
                map.set(n.val, newNeighbor)
            }

            q.push([n, newNeighbor])
            newNode.neighbors.push(newNeighbor)
        })
    }
    return root
};


// let node = new Node(2, [])
let node1 = new Node(1, [])
let node2 = new Node(2, [])
let node3 = new Node(3, [])
let node4 = new Node(4, [])
// let node5 = new Node(2)
// let node6 = new Node(2)

node1.neighbors = [node2, node4]
node2.neighbors = [node1, node3]
node3.neighbors = [node2, node4]
node4.neighbors = [node1, node3]

console.log(cloneGraph(node1))
