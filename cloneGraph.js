
 // Definition for a Node.
 function Node(val, neighbors) {
    this.val = val === undefined ? 0 : val;
     this.neighbors = neighbors === undefined ? [] : neighbors;
 };

/**
 * Depth First Search. Use a Stack.
 * Use a vertices Set of nodes. If in set...get it from set.
 * Time Complexity: O(v + e) v is the number of nodes and e is the number of neighbors.
 * Space Complexity: O(v) we use a set that may have every vertice in it.
 */
var cloneGraph = function(node) {
    if (!node) return;
    let [stack, vertices, root, visited] = [[], new Map(), undefined, new Set()]
    stack.push(node)

    while (stack.length) {
        let node = stack.pop();
        if (visited.has(node.val)) continue;
        visited.add(node.val)

        if (!root){
            node = new Node(node.val, node.neighbors)
            root = node;
            vertices.set(node.val, node)
        } else {
            node = getOrSetNode(node, vertices)
        }

        node.neighbors = node.neighbors.map(node => getOrSetNode(node, vertices))
        stack.push(...node.neighbors)
    }
    return root;
};

const getOrSetNode = (node, vertices) => {
    if (vertices.has(node.val)) {
        node = vertices.get(node.val)
    } else {
        node = new Node(node.val, node.neighbors)
        vertices.set(node.val, node)
    }
    return node
}

let node = new Node(2, [])
let node1 = new Node(4, [])
let node2 = new Node(1, [])
let node3 = new Node(3, [])
let node4 = new Node(2)
let node5 = new Node(2)
let node6 = new Node(2)

node.neights = [node4]
node1.neights

console.log(cloneGraph([[2,4],[1,3],[2,4],[1,3]]))




2