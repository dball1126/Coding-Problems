/**
 * Topological sort.
 * result = []
 * indegrees = []
 * use Map
 * Time and Space O(V  + E) (2^n - 2)
 * Space: O(m)
 */

var findOrder = function(numCourses, prerequisites) {
    const result = []
    const queue = []
    const indegrees = [...new Array(numCourses)].fill(0);
    const map = new Map();

    for (let i = 0; i < prerequisites.length; i++) {
        let [v, k] = [prerequisites[i][0], prerequisites[i][1]]
        if (!map.has(k)) map.set(k, new Set());
        if (!map.has(v)) map.set(v, new Set());
        map.get(k).add(v)
        indegrees[v]++
    }
    indegrees.forEach((v, i) => v === 0 ? queue.push(i) : undefined)
    
    while(queue.length) {
        let c = queue.shift();
        
        if (indegrees[c] === 0) result.push(c);
        if (result.length === numCourses) return result;

        if (map.has(c)) {
            for (let i = 0; i < Array.from(map.get(c)).length; i++) {
                const v = Array.from(map.get(c))[i];
                if (map.has(v) && map.get(v).has(c)) return []; // detect cycle

                indegrees[v]--
                if (indegrees[v] === 0) queue.push(v)
            }
        }
    }
    if (result.length === numCourses) return result;
    return []
}

console.log(findOrder(numCourses = 1, prerequisites = []))