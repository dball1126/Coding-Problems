
var countComponents = function(n, edges) {
    const mainItems = makeSet(edges, new Map())
    const set = new Set();

    for (let i = 0; i < edges.length; i++) {
        const items = edges[i]
        const [node1, node2] = [items[0], items[1]]
        union(node1, node2, mainItems)
    }
    for (let i = 0; i < edges.length; i++) {
        const items = edges[i]
        const [node1, node2] = [items[0], items[1]]
        set.add(find(node1, mainItems))
        set.add(find(node2, mainItems))
    }
    console.log(mainItems)
    return set.size
};

const union = (node1, node2, map) => {
    const parent1 = find(node1, map)
    const parent2 = find(node2, map)
    
    if (parent1 === parent2) return;

    if (map.get(parent1).rank >= map.get(parent2).rank) {
        if (map.get(parent1).rank === map.get(parent2).rank) {
            map.get(parent1).rank +=1
        }
        map.get(parent2).parent = parent1
    } else {
        map.get(parent1).parent = parent2;
    }

}

const find = (node1, map) => {
    if (node1 !== map.get(node1).parent) {
        map.get(node1).parent = find(map.get(node1).parent, map)
        // map.set(node, map.get(node))
    }
    return map.get(node1).parent
}

const makeSet = (arr, map) => {
    for (let i = 0; i < arr.length; i++) {
        const items = arr[i]
        const [node1, node2] = [items[0], items[1]]
        map.set(node1, new Node(node1, 0))
        map.set(node2, new Node(node2, 0))
    }
    return map;
}

class Node {
    constructor(parent = undefined, rank = undefined, value = undefined) {
        this.parent = parent;
        this.rank = rank;
        this.value = value;
    }
}

console.log(countComponents( n = 5, edges = [[0,1],[1,2],[3,4]]))