
var findOrder = function(numCourses, c) {
    let [indegrees, list, result] = [[], new Map(), []];
    for (let i = 0; i < numCourses; i++) {
        indegrees[i] = 0;
        list.set(i, new Set())
    }
    for (let i = 0; i < c.length; i++) {
        if (!list.has(c[i][0])) list.set(c[i][0], new Set())
        list.get(c[i][1]).add(c[i][0])
        indegrees[c[i][0]]++
    }

    let q = indegrees.filter(e => e === 0)

    while (q.length) {
        let n = q.shift();
        result.push(n)
        for(let v of list.get(n)) {
            if (list.has(v) && list.get(v).has(n)) return [];
            indegrees[v]--
            if (indegrees[v] === 0) q.push(v)
        }
    }
    return result;
}

console.log(findOrder(  numCourses = 1, prerequisites = []))