
var findOrder = function(numCourses, prerequisites) {

    const indegrees = [...new Array(numCourses)].fill(0);
    const list = new Map();
    let queue = [];
    let result = [];
    // initialization
    for (let i = 0; i < prerequisites.length; i++) {
        const a = prerequisites[i];
        
        let [k, v] = [a[0], a[1]]
        if (!list.has(k)) {
            list.set(k, [v])
            indegrees[k]++
        } else {
            list.get(k).push(v)
            indegrees[k]++
        }
        // detect cycle
        if (!list.has(v)) {
            list.set(v, [])
        } else if (list.get(v).includes(k)) {
            return [];
        }
    }

    // load up queue
    indegrees.forEach((v, i) => v === 0 ? queue.push(i) : null)
    while (queue.length) {
        let n = queue.shift();
        result.push(n)
        
        for(let [k, v] of list) {
            if (v.includes(n)) {
                indegrees[k]--
                if (indegrees[k] === 0) queue.push(k)
            }
        }
    }
    console.log(indegrees)
    return result;
}


console.log(findOrder(4,
    [[0,1],[0,2],[1,3],[3,0]]))