// Topological Sort
// Time and Space: O(V + E)
const findOrder = (numCourses, prerequisites) => {
    let indegrees = [], visited = new Set(), indegreesMap = new Map()
    let queue = [], order = []
    for(let i = 0; i < numCourses; i++) {
        indegrees[i] = 0; indegreesMap.set(i, new Set())
    }
    for(let [x, y] of prerequisites) {
        indegrees[x]+=1; indegreesMap.get(y).add(x)
    }
    indegrees.forEach((v, i) => v === 0 ? queue.push(i) : undefined)
    while (queue.length) {
        let node = queue.shift();
        if (visited.has(node)) continue;
        visited.add(node);
        let next = indegreesMap.get(node)
        order.push(node)
        if (order.length === numCourses) return order
        for (let n of next) {
            if (indegreesMap.get(n).has(node)) return []
            indegrees[n]-=1
            if (indegrees[n] === 0) queue.push(n)
        }
    }
    return order.length === numCourses ? order : [];
}
console.log(findOrder(4,[[1,0],[2,0],[3,1],[3,2]])) // = [0,2,1,3]
