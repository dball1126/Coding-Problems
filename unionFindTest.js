var countComponents = function(n, edges) {
    const set = makeSet(edges)

    for (let i = 0; i < edges.length; i++) {
        const edge = edges[i];
        const [edge1, edge2] = [edge[0], edge[1]];
        union(edge1, edge2, set)
    }

    for (let i = 0; i < edges.length; i++) {
        const edge = edges[i];
        const [edge1, edge2] = [edge[0], edge[1]];
        find(edge1, set)
        find(edge2, set)
    }

    console.log(set)
};

const makeSet = (edges) => {
    const result = new Map();
    for (let i = 0; i < edges.length; i++) {
        const [edge1, edge2] = [edges[i][0], edges[i][1]];
        result.set(edge1, new Node(edge1, 0))
        result.set(edge2, new Node(edge2, 0))
        // result[edge1] = new Node(edge1, 0);
        // result[edge2] = new Node(edge2, 0);
    }
    return result;
}

const union = (node1, node2, map) => {
    const parent1 = find(node1, map)
    const parent2 = find(node2, map)
    map.get(parent1).parent = parent2
}

const find = (node, map) => {
    if (node !== map.get(node).parent) {
        map.get(node).parent = find(map.get(node).parent, map)
    }
    return map.get(node).parent
}

class Node {
    constructor(parent = undefined, rank = undefined, data = undefined) {
        this.parent = parent;
        this.rank = rank;
        this.data = data;
    }
}

console.log(countComponents(n = 5, edges = [[0,1],[1,2],[3,4]]))