class Node {
    constructor(parent = undefined){
        this.parent = parent;
    }
}


var countComponents = function(n, edges) {
    const result = {}

    for (let i = 0; i < edges.length; i++) {
        const [edge1, edge2] = [edges[i][0], edges[i][1]]    
        if (!result[edge1]) result[edge1] = new Node(edge1);
        if (!result[edge2]) result[edge2] = new Node(edge2);
    }
    


    const union = (edge1, edge2) => {
        const parent1 = find(edge1, edge2)
        const parent2 = find(edge2, edge2)

        if (parent1 != parent2)
            result[edge1].parent = parent2;
    }

    const find = (node1) => {
        if (parseInt(node1) !== parseInt(result[node1].parent)) {
            result[node1].parent = find(result[node1].parent)
        }
        return result[node1].parent
    }

    for (let i = 0; i < edges.length; i++) {
        const [edge1, edge2] = [edges[i][0], edges[i][1]]
        union(edge1, edge2);
    }

    for (let i = 0; i < edges.length; i++) {
        const [edge1, edge2] = [edges[i][0], edges[i][1]]    
        find(edge1)
        find(edge2)
    }

    return result
};

console.log(countComponents(n = 5, edges = [[0,1],[1,2],[3,4]]))