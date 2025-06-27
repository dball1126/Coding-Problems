/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    let map = new Map();
    for (let i = 0; i < numCourses; i++) {
        map.set(i, new Set());
    }

    for (let [a, b] of prerequisites) {
        map.get(a).add(b)
    }
    let result = []
    let visiting = new Set();
    let visited = new Set();

    const hasCycle = (nde) => {
        if (visited.has(nde)) return false;
        if (visiting.has(nde)) return true;

        visiting.add(nde)
        for (let n of Array.from(map.get(nde))) {
            if (hasCycle(n)) return true;
        }
        visiting.delete(nde);
        visited.add(nde)
        result.push(nde)
    }
    for (let [k, v] of map) {
        if (hasCycle(k)) return false;
    }
    return true;
};
console.log(canFinish(numCourses = 5, prerequisites = [[1,4],[2,4],[3,1],[3,2]]

))