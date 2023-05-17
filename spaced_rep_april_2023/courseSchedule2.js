// Topological Sort, Time: O(V + E), Space: O(E)
var findOrder = function(numCourses, prerequisites) {
    let indegress = new Map(), edgesMap = new Map(), queue = [], order = []
    for (let [x, y] of prerequisites) {
        if (!indegress.has(x)) indegress.set(x, new Set())
        if (!edgesMap.has(y)) edgesMap.set(y, new Set())
        indegress.get(x).add(y)
        edgesMap.get(y).add(x)
    }
    for(let i = 0; i < numCourses; i++) {
        if (!indegress.has(i)) queue.push(i)
    }
    while (queue.length) {
        let node = queue.shift();
        order.push(node)
        if (edgesMap.has(node)) {
            const edges = Array.from(edgesMap.get(node))
            edges.forEach(edge => {
                indegress.get(edge).delete(node)
                if (indegress.get(edge).size === 0) {
                    queue.push(edge)
                    indegress.delete(edge)
                }})}
    }
    return order.length === numCourses ? order : []
};
console.log(findOrder(4,[[1,0],[2,0],[3,1],[3,2]]))// = [0,1,2,3]