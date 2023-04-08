// It states The prerequisites graph has no cycles.
// Create Adjaceny List.
// Create indegrees list.
// Sort via Topological sort.
// Once we have the array sorted iterate over the queries to
// determine if it there are prerequisites or not.
// use memoization to store the values of the queries from the topological sort.




var checkIfPrerequisite = function(numCourses, prerequisites, queries) {
    
    let result = [];
    let j = 0;
    const adjList = adjacencyList(prerequisites)
    const indegrees = indegreeList(prerequisites)
    const copy = {}
    for (let key in indegrees) copy[key] = indegrees[key]
    // console.log(copy)
    const sortedNodes = sortNodesByIndegree(adjList, copy);
    // console.log(indegrees)
    queries.forEach(query => {
        const [prerequsite, course] = [query[0], query[1]]

        // get the position in the sorted array
        const idx = sortedNodes.findIndex(node =>{
            // console.log(node)
            return node[0] === course
        })
        let allCourses = sortedNodes.slice(0, idx);
        console.log(allCourses)
        allCourses = allCourses.map(course => course.flat()).flat()

        // we must have some indegrees for the course.
        if (!indegrees[course]) {
            result.push(false)
        } else {
            // console.log(allCourses)
            allCourses.flat().find(num => num === prerequsite) !== undefined ? result.push(true) : result.push(false)
        }
    })
    return result
};

const sortNodesByIndegree = (adjList, indegrees) => {
    const sorted = [];
    const queue = [];
    // load the queue with nodes that have an indegree of 0
    for (let key in indegrees) {
        if (indegrees[key] === 0) {
            queue.push([key, indegrees[key]])
            delete indegrees[key]
        }
    }
    while (queue.length) {
        const node = queue.shift();
        const sortKey = parseInt(node[0])
        const sortVal = adjList[sortKey] !== undefined ? adjList[sortKey] : []
        sorted.push([sortKey, sortVal]);

        for(let key in adjList) {
            const values = adjList[key];
            values.forEach(key => {
                if (indegrees[key]) {
                    indegrees[key]--
                    if (indegrees[key] === 0) {
                        queue.push([key, indegrees[key]])
                        delete indegrees[key]
                    }
                }
            })
        }
    }

    return sorted
}

const adjacencyList = (courses) => {
    const list = {};
    for (let i = 0; i < courses.length; i++) {
        const course = courses[i];
        const [key, val] = [course[0], course[1]];
        if (list[key] === undefined) {
            list[key] = [val]
        } else {
            list[key].push(val)
        }
    }
    return list
}

const indegreeList = (courses) => {
    const list = {};
    for (let i = 0; i < courses.length; i++) {
        const course = courses[i];

        const [val, key] = [course[0], course[1]];
        if (!list[key]) {
            list[key] = 1
        } else {
            list[key]++
        }
        if (!list[val]) list[val] = 0;
    }
    return list
}

console.log(checkIfPrerequisite(
    5,
    [[4,3],[4,1],[4,0],[3,2],[3,1],[3,0],[2,1],[2,0],[1,0]],
    [[1,4],[4,2],[0,1],[4,0],[0,2],[1,3],[0,1]]))